import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import Messages from "./components/Messages/Messages";
import Configs from "./components/Configs/Configs";
import { useCallback, useState, useContext, useEffect } from "react";
import PopupWrapper from "./components/PopupWrapper/PopupWrapper";
import PopupMessage from "./components/PopupMessage/PopupMessage";
import LogIn from "./components/LogIn/Login";
import axios from "axios";

const MessagesContext = React.createContext(null)

const App = () => {
    const [configs, setConfigs] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState('')
    const [messages, setMessages] = useState([])
    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const messagesData = await axios.get('https://61b8b44138f69a0017ce5cd7.mockapi.io/Memory_game')
            const usersData = await axios.get('https://61b8b44138f69a0017ce5cd7.mockapi.io/orders')
            setMessages(messagesData.data)
            setUsers(usersData.data)
        }
        fetchData()
    }, [])

    const handleConfigs = useCallback((configsObj) => {
        setConfigs(configsObj)
    }, [])

    const goBack = () => {
        setTimeout(() => {
            navigate('..')
        }, 200)
    }

    return (
        <MessagesContext.Provider value={{ messages, users, setMessages, setUsers }}>
            <div className="app-wrapper">
                <Header isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    setUser={setUser} />
                {
                    !isLoggedIn ?
                        <LogIn
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                            setUser={setUser}
                            user={user}
                        /> :
                        <>

                            <Routes>
                                <Route
                                    path='message'
                                    element={<Messages configs={configs} user={user} />} />
                                <Route
                                    path='configs'
                                    element={<Configs handleConfigs={handleConfigs} />} />
                                <Route
                                    path='' />
                                <Route path=':id' element={
                                    <PopupWrapper onClose={goBack} user={user}>
                                        <PopupMessage />
                                    </PopupWrapper>} />
                            </Routes>
                        </>
                }

            </div>
        </MessagesContext.Provider>
    );
}

export const useMessagesData = () => useContext(MessagesContext)

export default App;