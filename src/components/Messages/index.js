import React, {memo, useRef, useState} from "react";
import {useMessagesData} from "../../contexts/messagesContext";
import MessageComp from "../MessageComp";
import {useEffect} from "react";
import {FILTER_OPTIONS} from "../../helpers/constants";
import {NavLink, useNavigate} from "react-router-dom";
import NewMessage from "../newMessage/newMessage";

const Messages = ({configs, loggedUser}) => {
    const {messages} = useMessagesData()
    const navigate = useNavigate();
    const inputRef = useRef(null)

    let newdate = new Date().toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'})

    const [filteredMessages, setFilteredMessages] = useState([])
    const [filterSelectValue, setFilterSelectValue] = useState(FILTER_OPTIONS[0])
    const [filterInputValue, setFilterInputValue] = useState('')
    const [newMessage, setNewMessage] = useState('')
    const [messageEditing, setMessageEditing] = useState(null)
    const [editingText, setEditingText] = useState('')

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

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const addMessage = () => {
        let messageNew = {
            id: messages.length + 1,
            name: loggedUser,
            date: newdate,
            text: newMessage,
            textColor: "black",
            nameColor: "black"
        }

        messages.push(messageNew)
        navigate('./');
        setNewMessage('')
    }

    const handleSelectValue = e => {
        setFilterSelectValue(e.target.value)
    }
    const handleInputValue = e => {
        setFilterInputValue(e.target.value)
    }

    const handleNewMessage = e => {
        setNewMessage(e.target.value)
    }


    const deleteMessage = (id) => {
        // console.log('deleted')
        const deletedMessageindex = messages.findIndex(item => item.id === id);
        messages.splice(deletedMessageindex, 1);

        setTimeout(() => {
            navigate('./')
        }, )
    }

    const editMessage = (id) => {
        const updateMesasges = [...messages].map((message) => {
            if(message.id === id) {
                message.text = editingText
            }
            return message
        })
        setTimeout(() => {
            navigate('./')
        }, )
        setMessageEditing(null)
        setEditingText('')
    }

    return (
        <>
            <div>
                <form className='addForm' onSubmit={handleSubmit}>
                    <input className='addInp' type="text" onChange={handleNewMessage} value={newMessage}/>
                    <button className='addBtn' onClick={addMessage}>Add New Message</button>
                </form>

            </div>
            {
                messages.map(message => (
                    // <NavLink key={message.id} className='message-container' to={`${message.id}`}>
                        <div key={message.id} className='message-item'>

                            <div>
                                {messageEditing === message.id ?
                                    ( <input type="text"
                                           onChange={(e) => setEditingText(e.target.value)}
                                           value={editingText}
                                    />) : (<MessageComp item={message}/>)}
                            </div>
                            <div >
                                <span className='bttn'><button >Reply</button></span>
                                {messageEditing === message.id ?
                                    (<span className='bttn' onClick={() => editMessage(message.id)}><button >Submit Edits</button></span>) :
                                    (<span className='bttn' onClick={() => setMessageEditing(message.id)}><button >Edit</button></span>)}
                                <span className='bttn' onClick={() => deleteMessage(message.id)}><button >Delete</button></span>
                            </div>
                        </div>
                    // </NavLink>
                ))
            }
        </>
    )
}

export default memo(Messages)
