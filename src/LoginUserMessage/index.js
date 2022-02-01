import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginUserMessage = ({item: {date, text, textColor, id}, hendleDelete}) =>{
    
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
      }

      useEffect(() =>{
            scrollToBottom();
      }, []);

      const deleteMessage = () =>{
          hendleDelete(id);
          navigate('../messages');
      }
      
    return(
        <div className="loginUserMessage" ref={messagesEndRef}>
            <p className="messageDate">{date}</p>
            <p className="messageText" style={{color: textColor}}>{text}</p>
            <button onClick={deleteMessage}>Delete</button>
        </div>
    )
}

export default LoginUserMessage;