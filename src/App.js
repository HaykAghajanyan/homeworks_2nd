import Header from "./components/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import Messages from "./components/Messages";
import Configs from "./components/Configs";
import {useCallback, useEffect, useState} from "react";
import PopupWrapper from "./components/PopupWrapper";
import PopupMessage from "./components/PopupMessage";
import UserLog from "./components/UserLog/userLog";

const App = () => {
    
    const [loggedIn, setLoggedIn] = useState(false);
    const [configs, setConfigs] = useState({})

const handleLogin = useCallback((details)=>{
    setLoggedIn(true);
    console.log(loggedIn)
},[loggedIn])
   
    

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
                <Route path='userLog' element={<UserLog handleLogin={handleLogin}/>}/>
                <Route path=':id' element={
                    <PopupWrapper onClose={goBack}>
                        <PopupMessage/>
                    </PopupWrapper>}/>
            </Routes>
        </>
    );
}

export default App;
