import Header from "./components/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import Messages from "./components/Messages";
import Configs from "./components/Configs";
import LogIn from "./components/LogIn/logIn";
import {useCallback, useState} from "react";

import NewMessage from "./components/newMessage/newMessage";

const App = () => {
    const [configs, setConfigs] = useState({})
    const [loggedUser, setLoggedUser] = useState()


    // const navigate = useNavigate()

    const handleConfigs = useCallback((configsObj) => {
        setConfigs(configsObj)
    }, [])

    const handleUser = useCallback((logginUser) => {
        setLoggedUser(logginUser)
    }, [])

    // const goBack = () => {
    //     setTimeout(() => {
    //         navigate('..')
    //     }, 200)
    // }

    return (
        <>
            <Header/>
            <Routes>
                <Route path='' element={<LogIn handleUser={handleUser} />}/>
                {/*<Route path='addMessage' element={<NewMessage/>}/>*/}
                <Route path='messages' element={<Messages configs={configs} loggedUser={loggedUser} />}/>
                <Route path='configs' element={<Configs handleConfigs={handleConfigs}/>}/>
                {/*<Route path=':id' element={*/}
                {/*    <PopupWrapper onClose={goBack}>*/}
                {/*        <PopupMessage/>*/}
                {/*    </PopupWrapper>}/>*/}
            </Routes>
        </>
    );
}

export default App;
