import React, {memo, useRef, useState} from "react";
import {useMessagesData} from "../../contexts/messagesContext";
import MessageComp from "../MessageComp";
import {useEffect} from "react";
import {FILTER_OPTIONS} from "../../helpers/constants";
import {NavLink} from "react-router-dom";
import NewMessage from "../newMessage/newMessage";

const Messages = ({configs, loggedUser}) => {
    let {messages} = useMessagesData()

    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = day + "/" + month + "/" + year;

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
            id: newMessage.length + 1,
            name: loggedUser,
            date: newdate,
            text: newItem,
            textColor: "black",
            nameColor: "black"
        }
        // console.log(messages)

        setNewMessage([...newMessage, messageNew])
        setNewItem('')

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
                <form className='addForm' onSubmit={handleSubmit}>
                    <input className='addInp' type="text" onChange={e => setNewItem(e.target.value)} value={newItem}/>
                    <button className='addBtn' onClick={addItemHandler}>Add New Message</button>
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
