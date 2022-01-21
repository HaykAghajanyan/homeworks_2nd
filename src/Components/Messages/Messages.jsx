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
    
    const hendleColorName = useCallback((color) =>{
        setMessages(prev => prev.map(item =>{
            item.nameColor = color;
            return item;
        }))
    }, []);

    const hendleColorText = useCallback((color) =>{
        setMessages(prev => prev.map(item =>{
            item.textColor = color;
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
                        hendleColorName={hendleColorName}
                        hendleColorText={hendleColorText}
                    />}/>
                </Routes>
            </div>
        </Router>
    )
}

export default Messages;