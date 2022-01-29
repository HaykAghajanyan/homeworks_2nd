import React, { memo, useRef, useState } from "react";
import { useMessagesData } from "../../App.js";
import MessageComp from "./MessageComp/MessageComp";
import { useEffect } from "react";
import { FILTER_OPTIONS } from "../../helpers/constants";
import style from './Messages.module.css'
import { TextField } from "@mui/material";
import axios from "axios";


const Messages = ({ configs, user }) => {
    const { messages, setMessages } = useMessagesData()

    const [filteredMessages, setFilteredMessages] = useState([])
    const [filterSelectValue, setFilterSelectValue] = useState(FILTER_OPTIONS[0])
    const [filterInputValue, setFilterInputValue] = useState('')

    const inputRef = useRef(null)
    const newMessage = React.useRef(null)

    const filterMessages = () => {
        clearTimeout(inputRef.current)
        inputRef.current = setTimeout(() => {
            const filteredData = messages
                .filter(item => item[filterSelectValue].includes(filterInputValue))
                .map(item => {
                    item[configs.target] = configs.color
                    return item
                })
            setFilteredMessages(filteredData)
        }, 400)
    }

    const handleSelectValue = e => {
        setFilterSelectValue(e.target.value)
    }

    const handleInputValue = e => {
        setFilterInputValue(e.target.value)
    }

    const handleNewMessage = e => {
        if (newMessage.current.value === '') {
            alert('Please type a message before sending')
        } else {
            let dateObj = new Date();
            let date = `${dateObj.getUTCDate()}/${dateObj.getUTCMonth() + 1}/${dateObj.getUTCFullYear()}`
            let obj = {
                "id": messages.length + 1,
                "name": user,
                "date": date,
                "text": newMessage.current.value,
                "textColor": "black",
                "nameColor": "black"
            };
            axios.post('https://61b8b44138f69a0017ce5cd7.mockapi.io/Memory_game', obj);
            setMessages(prev => [...prev, obj])
            newMessage.current.value = ''
        }
    }

    useEffect(() => {
        filterMessages()
        return () => {
            clearTimeout(inputRef.current)
        }
    }, [messages, configs, filterSelectValue, filterInputValue])

    return (
        <>
            <div className={style.messageFilter}>
                <TextField
                    inputRef={inputRef}
                    value={filterInputValue}
                    onChange={handleInputValue}
                    className={style.messageInput}
                    type="text"
                    label="search"
                    id="outlined-required"
                />
                <select
                    value={filterSelectValue}
                    onChange={handleSelectValue}
                    name="messageFilter"
                    id="messageFilter"
                >
                    {
                        FILTER_OPTIONS.map(item => (
                            <option value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            {
                filteredMessages.map(messagesData => (
                    <MessageComp key={messagesData.id} item={messagesData} user={user} />
                ))
            }
            <div className={style.new}>
                <TextField
                    inputRef={newMessage}
                    className={style.newMessage}
                    id="outlined-multiline-static"
                    label="New Message"
                    multiline
                    rows={4}
                />
                <p className={style.sendMessage} onClick={handleNewMessage}>Send Message</p>
            </div>
        </>
    )
}

export default memo(Messages)