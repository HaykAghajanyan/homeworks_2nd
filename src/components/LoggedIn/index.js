import React, { useState } from "react";
import { useMessagesData } from "../../contexts/messagesContext";
import { useNavigate } from "react-router-dom";

const initialValues = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: ""
};

function LoggedIn({ userName }) {
    const { messages } = useMessagesData();
    const [textValue, setTextValue] = useState(initialValues);
    const [replyValue, setReplyValue] = useState(initialValues);

    let navigate = useNavigate();

    const handleText = (e) => {
        const { name, value } = e.target;
        setTextValue({
            ...textValue,
            [name]: value,
        });
    }

    const handleSave = () => {
        navigate("../loggedIn");
    }

    const handleLogOut = () => {
        navigate("../login");
    }

    const handlePressEnter = (e) => {
        if (e.charCode === 13 && e.target.value) {
            const { name, value } = e.target;
            setReplyValue({
                ...replyValue,
                [name]: value,
            })
            e.target.style.display = "none";
        }
    }

    return (
        <>
            <button onClick={handleLogOut}>Log Out</button>
            {messages.map((message, i) => (
                <div style={{ padding: "1%" }} key={message.id} className='message-item'>
                    <span>{message.name}</span>
                    <span>{message.date}</span>
                    {message.name === userName ? <>
                        <input style={{ width: "70%", margin: "2%", textAlign: "center", border: 'none', boxShadow: "none", backgroundColor: "rgb(240, 252, 240)" }} onChange={handleText} value={textValue[i] === "" ? message.text : textValue[i]} name={i} />
                        <button style={{ margin: "2%" }} onClick={handleSave}>Save</button>
                    </> : <><span>{message.text}</span>
                        <span className="reply" style={{ color: 'blue' }}>{replyValue[i]}</span>
                        <input onKeyPress={handlePressEnter} style={{ width: "70%", margin: "2%" }} value={replyValue.i} name={i} placeholder="Type your reply and press Enter" key={message.identNo} />
                    </>}
                </div>
            ))}
        </>
    )
}

export default LoggedIn;