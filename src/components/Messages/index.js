import {memo, useRef, useState} from "react";
import MessageComp from "../MessageComp";
import {useEffect} from "react";
import {colors, FILTER_OPTIONS} from "../../helpers/constants";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {configSelector, messagesSelector, userSelector} from "../../helpers/reduxSelctors";
import NewPost from "../NewPost";
import {request} from "../../helpers/api";
import {setNewMessage} from "../../redux/ducks/messagesDuck";

const Messages = () => {
    const [filteredMessages, setFilteredMessages] = useState([])
    const [filterSelectValue, setFilterSelectValue] = useState(FILTER_OPTIONS[0])
    const [filterInputValue, setFilterInputValue] = useState('')
    const [postText, setPostText] = useState('')

    const dispatch = useDispatch()

    const inputRef = useRef(null)

    const {messages} = useSelector(messagesSelector)
    const {color, target} = useSelector(configSelector)
    const {currentUser} = useSelector(userSelector)

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

    const handleNewPostText = e => {
        setPostText(e.target.value)
    }

    const createNewPost = () => {
        let date = new Date()
            .toISOString()
            .split('T')[0]
            .split('-')
            .reverse()
            .join('/')

        const body = {
            name: currentUser.userName,
            date,
            text: postText,
            textColor: colors[0],
            nameColor: colors[0],
            replies: []
        }

        request('messages', 'POST', body)
            .then(res => {
                dispatch(setNewMessage(res))
            })

    }

    const handleSelectValue = e => {
        setFilterSelectValue(e.target.value)
    }
    const handleInputValue = e => {
        setFilterInputValue(e.target.value)
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
                            <option value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <NewPost
                title='Create new post'
                textValue={postText}
                changeHandler={handleNewPostText}
                postHandler={createNewPost}
                buttonText='Post'
            />
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
