import Header from "./components/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
// import Messages from "./components/Messages";
// import Configs from "./components/Configs";
import {useCallback, useEffect, useState, lazy, Suspense} from "react";
// import PopupWrapper from "./components/PopupWrapper";
import PopupMessage from "./components/PopupMessage";
import {useDispatch} from "react-redux";
import {fetchMessages} from "./redux/ducks/messageDuck";
// import AuthComponent from "./components/AuthComponent";
import {fetchId} from "./redux/ducks/appDuck";
// import Cats from "./components/Cats";

const Messages = lazy(() => import('./components/Messages'))
const Configs = lazy(() => import('./components/Configs'))
const PopupWrapper = lazy(() => import('./components/PopupWrapper'))
const AuthComponent = lazy(() => import('./components/AuthComponent'))
const Cats = lazy(() => import('./components/Cats'))

const App = () => {
    const [configs, setConfigs] = useState({})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMessages())
        dispatch(fetchId())
    },[])

    const navigate = useNavigate()

    const handleConfigs = useCallback((configsObj) => {
        setConfigs(configsObj)
    }, [])

    const goBack = () => {
        setTimeout(() => {
            navigate('..')
        }, 200)
    }

    return (
        <>
            <Header/>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path='' element={<Messages configs={configs}/>}/>
                    <Route path='configs' element={<Configs handleConfigs={handleConfigs}/>}/>
                    <Route path='auth' element={<AuthComponent/>} />
                    <Route path='cats' element={<Cats/>} />
                    <Route path=':id' element={
                        <PopupWrapper onClose={goBack}>
                            <PopupMessage/>
                        </PopupWrapper>}/>
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
