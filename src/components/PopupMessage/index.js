import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useMessagesData} from "../../contexts/messagesContext";
import LoginUserMessage from "../../LoginUserMessage";
import ReplyMessages from "../../LoginUserMessage/ReplyMessages";
import MessageComp from "../MessageComp";

const PopupMessage = ({newReplyMessage, hendleDelete}) => {
    const [newMessage, setNewMessage] = useState('');
    
    const params = useParams();
    const {messages} = useMessagesData();
    


    const hendleText = e =>{
        setNewMessage(e.target.value);

    }

    const hendleOnSubmit = e =>{
        e.preventDefault();
        newReplyMessage(newMessage, params.id - 1);
        setNewMessage("");
    }


    return (
        <div className="popupMessage">
            <div className="popupMessageScroll">
                {
                    messages[params.id - 1].login ? 
                    <LoginUserMessage item={messages[params.id - 1]} hendleDelete={hendleDelete}/> :
                    <MessageComp item={messages[params.id - 1]} />
                }
                {
                    messages[params.id - 1].reply.map((messageText, index) =>(
                        <ReplyMessages key={index + messageText} item={messages[params.id - 1]} text={messageText}/>
                    ))
                }
            </div>
                
        <form className="formTestarea" onSubmit={hendleOnSubmit}>
                <textarea className="textarea" value={newMessage} onChange={hendleText}/>
                {newMessage === '' ? null : <button type="submit">Send</button>}
            </form>
        </div>
    )
}

export default PopupMessage;


