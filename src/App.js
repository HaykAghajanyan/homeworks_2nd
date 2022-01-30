import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Messages from "./components/Messages";
import Configs from "./components/Configs";
import Login from "./components/Login";
import LoggedIn from "./components/LoggedIn";
import BadUserName from "./components/BadUserName";
import React, {useCallback, useState} from "react";


const App = () => {
    const [userName, setUserName] = useState ('');
    const [configs, setConfigs] = useState({})

    const handleConfigs = useCallback((configsObj) => {
        setConfigs(configsObj)
    }, [])

    return (
        <>
            <Header/>
            <Routes>
                <Route path='' element={<Messages configs={configs}/>}/>
                <Route path='configs' element={<Configs handleConfigs={handleConfigs}/>}/>
                <Route path='login' element={<Login setUserName={setUserName} />}/>
                <Route path='loggedIn' element={<LoggedIn userName = {userName}/>}/>
                <Route path='badUserName' element={<BadUserName/>}/>
            </Routes>
        </>
    );
}

export default App;
