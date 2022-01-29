import React, {useContext, useEffect, useState} from 'react';
import './messagelist.css';
import {StoreContext} from "../../index";
import {Navigate, useNavigate} from "react-router-dom";

const MessageList = () => {
    const [messages, setMessages] = useState()
    const store = useContext(StoreContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(store.auth === false ) return;

        if(store.messages) {
            setMessages(store.messages)
            return;
        }

        fetch('messages.json')
            .then(res => res.json())
            .then(json => {
                let messages = json.messages.filter(message => message.name === store.login)

                store.messages = messages
                setMessages(messages)

            })
    }, [])


    const onDeleteHandler = (id) => {
        store.messages = store.messages.filter(message => message.id !== id)
        setMessages(store.messages)
    }

    const onChangeHandler = (id) => {
        navigate(`/message/${id}`)
    }

    if (store.auth === false) {
        return <Navigate to="/login"/>
    }

    return (
        <div className="message-container">
            {messages && messages.map((message) => <div className="message" key={message.id}>
                <h3 style={{color: message.nameColor}}>{message.name}</h3>
                <p style={{color: message.textColor}}>{message.text}</p>
                <p>{message.date}</p>
                <button className="btn-login" onClick={() => onChangeHandler(message.id)}>Change Message</button>
                <button className="btn-login" onClick={() => onDeleteHandler(message.id)}>X</button>
            </div>)}
        </div>);
};
export default MessageList;
