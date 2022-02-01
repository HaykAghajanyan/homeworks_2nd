import React, { memo, useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { addMessage, FILTER_OPTIONS } from "../../helpers/constants";
import { useMessagesData } from "../../contexts/messagesContext";
import MessageComp from "../MessageComp";
import LoginUserMessage from "../../LoginUserMessage";


const Messages = ({configs, loginObj, newReply, hendleDelete, deleteMesssageId}) => {

    const [filteredMessages, setFilteredMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const [filterSelectValue, setFilterSelectValue] = useState(FILTER_OPTIONS[0]);
    const [filterInputValue, setFilterInputValue] = useState('');

    
    const inputRef = useRef(null);
    const {messages} = useMessagesData();
   
    useEffect(() => {   
        filterMessages();
        return () => {
            clearTimeout(inputRef.current);
        }
    }, [messages, configs, filterSelectValue, filterInputValue, newMessage, newReply]);

    const filterMessages = () => {  
        clearTimeout(inputRef.current);

        inputRef.current = setTimeout(() => {

            const filteredData = messages
                .filter(item => {
                    return item[filterSelectValue].includes(filterInputValue);
                }).filter(item => !deleteMesssageId.includes(item.id))
                .map(item => {
                    if((item.id - 1) === newReply.i){
                        item.reply.push(newReply.newMessage);
                    }
                    item[configs.target] = configs.color;
                    return item;
                })

            setFilteredMessages(filteredData);
        }, 400)
    };

    const handleSelectValue = e => {
        setFilterSelectValue(e.target.value);
    };

    const handleInputValue = e => {
        setFilterInputValue(e.target.value);
    };

    const hendleText = e =>{
        setNewMessage(e.target.value);
    }

    const onSubmitChange = e =>{
        e.preventDefault();
        addMessage(messages, loginObj, newMessage);
        setNewMessage('');
        return messages;
    }

    console.log(messages);
    return (
        <>
            <div className='message-filter'>
                <input
                    ref={inputRef}
                    value={filterInputValue}
                    onChange={handleInputValue}
                    className='message-input'
                    type="text"
                    placeholder="search..."
                />
                <select
                    value={filterSelectValue}
                    onChange={handleSelectValue}
                    name="messageFilter"
                    id="messageFilter"
                >
                    {
                        FILTER_OPTIONS.map(item => (
                            <option  key={item} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div className="messageScroll">
            {
                filteredMessages.map(message => (
                    <NavLink key={message.id} className='message-container' to={`${message.id}`}>
                        <div className='message-item'>
                            {
                                message.login ? 
                                <LoginUserMessage item={message} hendleDelete={hendleDelete}/> : 
                                <MessageComp item={message}/>
                            }
                        </div>
                    </NavLink>
                ))
            }
            </div>
            <form className="formTestarea" onSubmit={onSubmitChange}>
                <textarea className="textarea" value={newMessage} onChange={hendleText}/>
                { newMessage === '' ? null : <button type="submit">Send</button> }
            </form>
        </>
    )
};

export default memo(Messages);
