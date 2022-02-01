import {memo, useRef, useState} from "react";
import MessageComp from "../MessageComp";
import {useEffect} from "react";
import {colors, FILTER_OPTIONS} from "../../helpers/constants";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {appSelector, configSelector, messagesSelector, userSelector} from "../../helpers/reduxSelctors";
import {api} from "../../helpers/api";
import {setNewMessage} from "../../redux/ducks/messageDuck";

const Messages = () => {
    const [filteredMessages, setFilteredMessages] = useState([])
    const [filterSelectValue, setFilterSelectValue] = useState(FILTER_OPTIONS[0])
    const [filterInputValue, setFilterInputValue] = useState('')
    const [postValue, setPostValue] = useState('')

    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const {messages} = useSelector(messagesSelector)
    const {currentId} = useSelector(appSelector)
    const {currentUser} = useSelector(userSelector)

    const {color, target} = useSelector(configSelector)

    useEffect(() => {
        filterMessages()
        return () => {
            clearTimeout(inputRef.current)
        }
    }, [messages, filterSelectValue, filterInputValue])

    const filterMessages = () => {
        clearTimeout(inputRef.current)
        inputRef.current = setTimeout(() => {
            const filteredData = messages
                .filter(item => item[filterSelectValue].includes(filterInputValue))
                .map(item => {
                    item[target] = color
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

    const createNewPost = () => {
        const newId = (Number(currentId) + 1).toString()
        let date = new Date()
            .toISOString()
            .split('T')[0]
            .split('-')
            .reverse()
            .join('/')

        const body = {
            id: newId,
            name: currentUser.userName,
            date,
            text: postValue,
            textColor: colors[0],
            nameColor: colors[0],
            replies: []
        }

        fetch(`${api}/messages`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                dispatch(setNewMessage(res))
            })
            .catch(err => console.log(err))
    }

    const handleNewPost = e => {
        setPostValue(e.target.value)
    }

    return (
        <>
            <div className='message-filter'>
                <input
                    ref={inputRef}
                    value={filterInputValue}
                    onChange={handleInputValue}
                    className='message-input'
                    type="text"
                />
                <select
                    value={filterSelectValue}
                    onChange={handleSelectValue}
                    name="messageFilter"
                    id="messageFilter"
                >
                    {
                        FILTER_OPTIONS.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div className='new-post'>
                <h3>Write a new post</h3>
                <div className='new-post_inputs'>
                    <textarea value={postValue} onChange={handleNewPost} className='new-post_area'/>
                </div>
                <button onClick={createNewPost} className='btn'>Post</button>
            </div>
            {
                filteredMessages.map(message => (
                    <NavLink key={message.id} className='message-container' to={`${message.id}`}>
                        <div className='message-item'>
                            <MessageComp item={message}/>
                        </div>
                    </NavLink>

                ))
            }
        </>
    )
}

export default memo(Messages)
