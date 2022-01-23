import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserMessage from "../UserMessage/UserMessage";
import Select from "./Select";
import styles from './messages.module.css';


function Messages(){
    const [messages, setMessages] = useState([]);
    useEffect(() =>{    
        fetch('messages.json')
        .then(response => response.json())
        .then(result => setMessages(result['messages']));
    }, []);
    
    const hendleColor = useCallback((color, text_name) =>{
        setMessages(prev => prev.map(item =>{
            if(text_name === "Name"){
                item.nameColor = color;
            } else if(text_name === "Text"){
                item.textColor = color;
            }
            return item;
        }))
    }, []);

    return(
        <Router>
            <div className={styles.header}>
                <nav>
                    <Link to='/'>Messages</Link>
                    <Link to='/select'>Select</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<UserMessage messages={messages}/>}/>
                    <Route 
                        path="/select" element={<Select 
                        messages={messages} 
                        hendleColor={hendleColor}   
                    />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default Messages;