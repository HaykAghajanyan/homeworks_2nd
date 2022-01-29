import React, {useContext, useState} from 'react'
import {StoreContext} from "../../index";
import {useNavigate} from "react-router-dom";

const NewMessage = () => {
    const store = useContext(StoreContext)
    const navigate = useNavigate()

    const [text, setText] = useState("")

    const onSendHandler = () => {
        let date = new Date()

        let newMessage = {
            id: Math.floor(Math.random() * (1000 - 100 + 1) + 100).toString(),
            name: store.login,
            date: `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`,
            text: text,
            textColor: "black",
            nameColor: "black"
        }

        store.messages.push(newMessage)
        navigate("/list")
    }

    return (
        <div className="container">
            <span className="message-prop">Name: {store.login}</span>
            <label className="message-prop">
                Text:
                <input
                    type="text"
                    className="message-prop"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>

            <button className="message-prop" onClick={onSendHandler}>Send</button>
        </div>
    )
}

export default NewMessage