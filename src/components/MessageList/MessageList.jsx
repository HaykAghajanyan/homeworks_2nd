import React from 'react';
import './messagelist.css';

const MessageList = ({messages}) => {
    return (<div className="message-container">
        {messages && messages.map((message) => <div className="message" key={message.id}>
            <h3 style={{color: message.nameColor}}>{message.name}</h3>
            <p style={{color: message.textColor}}>{message.text}</p>
            <p>{message.date}</p>
        </div>)}
    </div>);
};
export default MessageList;
