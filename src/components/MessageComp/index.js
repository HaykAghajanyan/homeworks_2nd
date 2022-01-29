import {useSelector} from "react-redux";
import {loginSelector} from "../../helpers/reduxSelectors";
import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useMessagesData} from "../../contexts/messagesContext";

const MessageComp = ({item, openInPopup}) => {
    const {isLoggedIn, username, password} = useSelector(loginSelector);
    const params = useParams();
    const {messages} = useMessagesData();
    const navigate = useNavigate();

    const [inputText, setInputText] = useState(item.text);
    const [showAnswerTextArea, setShowAnswerTextArea] = useState(false);
    const [answerText, setAnswerText] = useState('');

    const handleInputText = e => {
        setInputText(e.target.value);
        item.text = e.target.value;
    };

    const handleShowTextArea = () => {
        setShowAnswerTextArea(true);
    };

    const handleAnswerText = e => {
        setAnswerText(e.target.value);
    };

    const handleSaveAnswer = () => {
        const index = messages.findIndex(item => item.id === params.id);
        messages[index].answer = answerText;
        setShowAnswerTextArea(false)
    };

    const onDelete = () => {
        const index = messages.findIndex(item => item.id === params.id);
        messages.splice(index, 1);

        setTimeout(() => {
            navigate('..')
        }, 200)
    };

    return (
        <>
            <p style={{color: item.nameColor}}>{item.name}</p>
            <p>{item.date}</p>
            {(openInPopup && isLoggedIn && username === item.username && password === item.password) ?
                <input className='message-input' value={inputText}
                       onChange={handleInputText}/> :
                <p style={{color: item.textColor}}>{item.text}</p>}

            {openInPopup && isLoggedIn && username === item.username && password === item.password
            && <button className='delete-button' onClick={onDelete}>Delete message</button>}

            {item.answer && <span className='answeredMessage'>This message is already answered : {item.answer}</span>}
            {openInPopup && !item.answer && <button type='button' className='answerButton' onClick={handleShowTextArea}>Answer</button>}
            {showAnswerTextArea &&
            <div>
                <textarea value={answerText} onChange={handleAnswerText}/>
                <button type='submit' onClick={handleSaveAnswer}>Save</button>
            </div>
            }
        </>
    );
};

export default MessageComp


