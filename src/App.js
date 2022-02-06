import Header from "./components/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import Messages from "./components/Messages";
import Configs from "./components/Configs";
import {useCallback, useEffect, useState} from "react";
import PopupWrapper from "./components/PopupWrapper";
import PopupMessage from "./components/PopupMessage";
import {useDispatch} from "react-redux";
import {fetchMessages} from "./redux/ducks/messageDuck";
import AuthComponent from "./components/AuthComponent";
import {fetchId} from "./redux/ducks/appDuck";
import Avatars from "./components/Avatars";

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
            <Routes>
                <Route path='' element={<Messages configs={configs}/>}/>
                <Route path='configs' element={<Configs handleConfigs={handleConfigs}/>}/>
                <Route path='auth' element={<AuthComponent/>} />
                <Route path='avatars' element={<Avatars/>} />
                <Route path=':id' element={
                    <PopupWrapper onClose={goBack}>
                        <PopupMessage/>
                    </PopupWrapper>}/>
            </Routes>
        </>
    );
}

export default App;
