import Header from "./components/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import Messages from "./components/Messages";
import Configs from "./components/Configs";
import {useCallback, useState} from "react";
import PopupWrapper from "./components/PopupWrapper";
import PopupMessage from "./components/PopupMessage";
import Login from "./components/Login";
import Register from "./components/Register";





const App = () => {
    const [configs, setConfigs] = useState({})

    const navigate = useNavigate()

    const handleConfigs = useCallback((configsObj) => {
        setConfigs(configsObj)
    }, [])

    const goBack = () => {
        setTimeout(() => {
            navigate('..')
        }, 200)
    }

    return(

        <>

        
            <Header/>
            
            <Routes>
           
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            
                <Route path='' element={<Messages configs={configs}/>}/>
                <Route path='configs' element={<Configs handleConfigs={handleConfigs}/>}/>
                <Route path=':id' element={
                    <PopupWrapper onClose={goBack}>
                        <PopupMessage/>
                    </PopupWrapper>}/>
            </Routes>
            

        </>
    );
}

export default App;
