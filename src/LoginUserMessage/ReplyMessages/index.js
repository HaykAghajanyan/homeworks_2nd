import React, { useEffect, useRef } from 'react';

const ReplyMessages = ({item: {date, textColor}, text}) =>{

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
      }

      useEffect(() =>{
            scrollToBottom();
      }, []);



    return(
        <div className="loginUserMessage" ref={messagesEndRef}>
            <p className="messageDate">{date}</p>
            <p className="messageText" style={{color: textColor}}>{text}</p>
        </div>
    )
}

export default ReplyMessages;