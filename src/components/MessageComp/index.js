import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeMessageText} from '../../redux/ducks/messageDuck'

const userSelector = ({usersDuck}) => usersDuck

const MessageComp = ({item: {id, name, date, text, textColor, nameColor}}) => {
    const [isUserMessage, setIsUserMessage] = useState(false)
    const [messageText, setMessageText] = useState(text)
    const [editInputValue, setEditInputValue] = useState(text)
    const [isEditing, setIsEditing] = useState(false)

    const dispatch = useDispatch()

    const {currentUser} = useSelector(userSelector)

    useEffect(() => {
        setIsUserMessage(currentUser.userName === name)
    }, [currentUser, name])

    const changeText = e => {
        setEditInputValue(e.target.value)
    }

    const saveText = () => {
        setMessageText(editInputValue)
        dispatch(changeMessageText({id, text: editInputValue}))
        setIsEditing(false)
    }

    const editMessage = e => {
        setIsEditing(true)
    }

    const replyMessage = () => {

    }

    const deleteMessage = () => {

    }

    return (
        <>
            <p style={{color: nameColor}}>{name}</p>
            <p>{date}</p>
            {
                isEditing ?
                    <>
                        <input value={editInputValue} onChange={changeText} type="text"/>
                        <button onClick={saveText}>save</button>
                    </>
                    :
                    <p style={{color: textColor}}>{messageText}</p>
            }

            <div className='action-buttons'>
                {
                    isUserMessage && <button
                        className='action-buttons-item'
                        onClick={editMessage}
                    >Edit</button>
                }
                <button
                    className='action-buttons-item'
                    onClick={replyMessage}
                >Reply</button>
                {
                    isUserMessage && <button
                        className='action-buttons-item'
                        onClick={deleteMessage}
                    >Delete</button>
                }
            </div>
        </>
    )
}

export default MessageComp
