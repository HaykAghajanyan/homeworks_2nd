import React, { useEffect, useRef } from "react";

const MessageComp = ({item: {name, date, text, textColor, nameColor}}) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
      }

      useEffect(() =>{
            scrollToBottom();
      }, []);
      
    return(
        <div className="messageComp" ref={messagesEndRef}>
            <p className="messageName" style={{color: nameColor}}>{name}</p>
            <p className="messageDate">{date}</p>
            <p className="messageText" style={{color: textColor}}>{text}</p>
        </div>
    )
}

export default MessageComp;
