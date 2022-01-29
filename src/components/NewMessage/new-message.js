import React, {useState} from "react";
import './new-message.css'
import {useMessagesData} from "../../contexts/messagesContext";
import {useSelector} from "react-redux";
import {loginSelector} from "../../helpers/reduxSelectors";
import {useNavigate} from "react-router-dom";

const NewMessage = () => {
    const {messages} = useMessagesData();
    const {username, password} = useSelector(loginSelector);

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSetMessage = e => {
        setMessage(e.target.value);
    };

    const saveMessage = () => {
        const user = messages.find(item => item.username === username && item.password === password);

        messages.push({
            id: (messages[messages.length-1].id + 1).toString(),
            name: user.name,
            username: user.username,
            password: user.password,
            date: new Date().toLocaleDateString(),
            text: message,
            "textColor": "black",
            "nameColor": "black"
        });
        navigate('../');
    };

    return (
        <>
            <div className='container'>
                <span> Add a message :</span>
                <div className='innerDiv'>
                    <textarea value={message} onChange={handleSetMessage}/>
                    <button type="submit" onClick={saveMessage}>Save</button>
                </div>
            </div>
        </>
    );
};

export default NewMessage;
