import React, {memo, useRef, useState} from "react";
import {useMessagesData} from "../../contexts/messagesContext";
import MessageComp from "../MessageComp";
import {useEffect} from "react";
import {FILTER_OPTIONS} from "../../helpers/constants";
import {NavLink} from "react-router-dom";
import NewMessage from "../newMessage/newMessage";

const Messages = ({configs}) => {
    let {messages} = useMessagesData()
    const [filteredMessages, setFilteredMessages] = useState([])
    const [filterSelectValue, setFilterSelectValue] = useState(FILTER_OPTIONS[0])
    const [filterInputValue, setFilterInputValue] = useState('')

    const [newMessage, setNewMessage] = useState(messages);
    const [newItem, setNewItem] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        //
        // setNewMessages(messages.concat(messageNew))
        // setNewMessage('')
        // console.log(messageNew)
        // console.log(messages)
    }

    const addItemHandler = () => {
        let messageNew = {
            id: "10",
            name: "Hasmik",
            date: "29/01/2022",
            text: newItem,
            textColor: "black",
            nameColor: "black"
        }
        // messages = [...messages].concat(messageNew);

        setNewMessage([...newMessage].concat(messageNew))


    }

    const inputRef = useRef(null)



    useEffect(() => {
        filterMessages()
        return () => {
            clearTimeout(inputRef.current)
        }
    }, [messages, configs, filterSelectValue, filterInputValue])

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

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem}/>
                    <button  onClick={addItemHandler}>Add New Message</button>
                </form>

            </div>
            {
                newMessage.map(message => (
                    // <NavLink key={message.id} className='message-container' to={`${message.id}`}>
                        <div className='message-item'>
                            <MessageComp item={message}/>
                        </div>
                    // </NavLink>

                ))
            }
        </>
    )
}

export default memo(Messages)
