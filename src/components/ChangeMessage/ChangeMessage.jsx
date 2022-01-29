import React, {useContext, useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {StoreContext} from "../../index";

import './changemessage.css'

const ChangeMessage = () => {
    const {id} = useParams()
    const store = useContext(StoreContext)
    const navigate = useNavigate()

    const [text, setText] = useState("")
    const [message, setMessage] = useState({})

    useEffect(() => {
        console.log(store.messages)
        let message = store.messages.find(message => message.id === id)
        setMessage(message)
        setText(message.text)
    }, [])

    const onTextChangeHandler = (e) => {
        setText(e.target.value)
    }

    const onSaveHandler = () => {
        store.messages = store.messages.map(message => {
            if(message.id === id){
                message.text = text
            }

            return message
        })
        navigate("/list")
    }


    return (
        <div className="container">
            <span className="message-prop">Name: {message.name}</span>
            <span className="message-prop">Date: {message.date}</span>
            <label htmlFor="text" className="message-prop">Text:
                <input
                    name="text"
                    className="message-prop"
                    type="text"
                    value={text}
                    onChange={onTextChangeHandler}/>
            </label>
            <button
                className="btn-save"
                onClick={onSaveHandler}
            >
                Save
            </button>
        </div>
    )
}

export default ChangeMessage