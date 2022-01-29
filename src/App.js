import Header from "./components/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import Messages from "./components/Messages";
import Configs from "./components/Configs";
import {useCallback, useState} from "react";
import PopupWrapper from "./components/PopupWrapper";
import PopupMessage from "./components/PopupMessage";
import LoginPage from "./components/Login/login-page";
import NewMessage from "./components/NewMessage/new-message";
import {useSelector} from "react-redux";
import {loginSelector} from "./helpers/reduxSelectors";

const App = () => {
    const [configs, setConfigs] = useState({});

    const navigate = useNavigate();
    const {isLoggedIn} = useSelector(loginSelector);

    const handleConfigs = useCallback((configsObj) => {
        setConfigs(configsObj)
    }, []);

    const goBack = () => {
        setTimeout(() => {
            navigate('..')
        }, 200)
    };

    return (
        <>
            <Header isLoggedIn={isLoggedIn}/>
            <Routes>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='' element={<Messages configs={configs}/>}/>
                {isLoggedIn && <Route path='add-message' element={<NewMessage/>}/>}
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
