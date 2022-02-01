import Header from "./components/Header";
import {Route, Routes, useNavigate} from "react-router-dom";
import Messages from "./components/Messages";
import Configs from "./components/Configs";
import {useCallback, useState} from "react";
import PopupWrapper from "./components/PopupWrapper";
import PopupMessage from "./components/PopupMessage";
import Login from "./components/Login";

const App = () => {

    const [configs, setConfigs] = useState({});
    const [loginObj, setloginObj] = useState({});
    const [showMessages, setShowMessages] = useState(false);
    const [newReply, setnewReply] = useState({});
    const [deleteMesssageId, setDeleteMessageId] = useState([]);
   
    const navigate = useNavigate();

    const handleConfigs = useCallback((configsObj) => {
        setConfigs(configsObj)
    }, []);

    const hendleLogin = useCallback((name, password) => {
        setloginObj({name, password});
        setShowMessages(prev => !prev);
        navigate('../messages')
    }, []);

    const newReplyMessage = useCallback((newMessage, i) =>{
        setnewReply({newMessage, i});
    }, []);

    const hendleDelete = useCallback((id) =>{
        setDeleteMessageId(prev => [...prev, id]);
    }, []);


    const goBack = () => {
        setTimeout(() => {
            navigate('../messages')
        }, 200)
    }

    return (
        <div className="app">
            <Header showMessages={showMessages}/>
            <Routes>
                <Route path='' element={<Login hendleLogin={hendleLogin}/>}/>
                <Route path='messages' element={<Messages 
                                        configs={configs} 
                                        loginObj={loginObj} 
                                        newReply={newReply}
                                        deleteMesssageId={deleteMesssageId}
                                        hendleDelete={hendleDelete}
                                         />}/>
                <Route path='configs' element={<Configs handleConfigs={handleConfigs}/>}/>
                <Route path='messages/:id' element={
                    <PopupWrapper onClose={goBack}>
                        <PopupMessage  loginObj={loginObj} newReplyMessage={newReplyMessage} hendleDelete={hendleDelete} />
                    </PopupWrapper>}/>
            </Routes>
        </div>
    );
}

export default App;
