import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import MessageList from "./components/MessageList/MessageList";
import ChangeMessage from "./components/ChangeMessage/ChangeMessage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
    let [messages, setMessages] = useState();
    useEffect(() => {
        fetch('messages.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => {
                setMessages(json);
            });
    }, []);
    const changeColorHandler = (field, color = 'black') => {
        let changedColors = messages?.map((message) => {
            message[`${field}Color`] = color;
            return message;
        });
        setMessages(changedColors);
    };
    return (<div className="App">
        <Navbar/>

        <main>
            <Routes>
                <Route path="/list" element={<MessageList messages={messages}/>}/>
                <Route path="/change" element={<ChangeMessage changeColorHandler={changeColorHandler}/>}/>
                <Route path="*" element={<Navigate to="/list"/>}/>
            </Routes>
        </main>

        <Footer/>
    </div>);
}

export default App;
