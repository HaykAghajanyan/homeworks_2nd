import {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../../helpers/reduxSelctors";
import {api} from "../../helpers/api";
import {deleteMessage, editMessage} from "../../redux/ducks/messageDuck";
import {useNavigate} from "react-router-dom";

const MessageComp = ({item, fromPopup}) => {
    const [isUserMessage, setIsUserMessage] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [isReply, setIsReply] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [textValue, setTextValue] = useState(item.text)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {currentUser} = useSelector(userSelector)

    useEffect(() => {
        setIsUserMessage(item.name === currentUser?.userName)
    }, [currentUser, item])

    if (!item) {
        return <div>...Loading</div>
    }

    const {id, name, date, textColor, nameColor} = item


    const edit = () => {
        setIsEditing(true)
    }

    const handleTextChange = e => {
        setTextValue(e.target.value)
    }

    const saveChanges = () => {
        const body = {
            id,
            name,
            date,
            text: textValue,
            textColor,
            nameColor
        }

        fetch(`${api}/messages/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'PUT',
            body: JSON.stringify(body) //TODO: forgot to stringify my data :D
        })
            .then(res => res.json())
            .then(res => {
                dispatch(editMessage({id, data: res}))
            })
            .catch(err => console.log(err))

        setIsEditing(false)
    }

    const handleMessageDelete = () => {
        //TODO: firstly we navigate, then deleting for avoiding errors

        fetch(`${api}/messages/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                navigate('..')
                dispatch(deleteMessage(id))
            })
            .catch(err => console.log(err))
    }

    const reply = () => {
        setIsReply(true)
    }

    const toggleDeleteMsg = () => {
        setIsDeleting(prev => !prev)
    }

    return (
        <>
            <p style={{color: nameColor}}>{name}</p>
            <p>{date}</p>
            {
                isEditing ?
                    <>
                        <input value={textValue} onChange={handleTextChange} type="text"/>
                        <button onClick={saveChanges}>Save</button>
                    </>
                    :
                    <p style={{color: textColor, maxWidth: '55%', textAlign: 'center'}}>{textValue}</p>
            }
            <div className='action-buttons'>
                {
                    !isEditing && isUserMessage && fromPopup && <button
                        onClick={edit}
                        className='action-buttons-item btn'
                    >Edit</button>
                }
                {
                    fromPopup && <button
                        onClick={reply}
                        className='action-buttons-item btn'
                    >Reply</button>
                }
                {
                    isUserMessage && fromPopup && <button
                        onClick={toggleDeleteMsg}
                        className='action-buttons-item btn'
                    >Delete</button>
                }
            </div>
            {
                fromPopup && isDeleting && (
                    <div className='delete-message'>
                        <p>Are you sure to delete this message</p>
                        <div className='delete-buttons'>
                            <button className='btn danger' onClick={handleMessageDelete}>Yes</button>
                            <button className='btn green' onClick={toggleDeleteMsg}>No</button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default memo(MessageComp)
