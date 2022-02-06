import {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {appSelector, userSelector} from "../../helpers/reduxSelctors";
import {api} from "../../helpers/api";
import {deleteMessage, editMessage, setReplyMessage} from "../../redux/ducks/messageDuck";
import {useNavigate} from "react-router-dom";
import {colors} from "../../helpers/constants";
import {setId} from "../../redux/ducks/appDuck";
import NewPost from "../NewPost";

const MessageComp = ({item, fromPopup}) => {
    const [isUserMessage, setIsUserMessage] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [isReply, setIsReply] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [textValue, setTextValue] = useState(item.text)
    const [replyValue, setReplyValue] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {currentUser} = useSelector(userSelector)
    const {currentId} = useSelector(appSelector)

    useEffect(() => {
        setIsUserMessage(item.name === currentUser?.userName)
    }, [currentUser, item])

    if (!item) {
        return <div>...Loading</div>
    }

    const {id, name, date, textColor, nameColor, replies} = item

    const edit = () => {
        setIsEditing(prev => !prev)
        setIsDeleting(false)
        setIsReply(false)
    }

    const handleTextChange = e => {
        setTextValue(e.target.value)
    }

    const saveChanges = ({id, name, date, textColor, nameColor, replies}, newTextValue) => {
        const body = {
            id,
            name,
            date,
            text: newTextValue,
            textColor,
            nameColor,
            replies
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

    const handleMessageDelete = (id) => {
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

    const handleMessageReply = () => {
        const repliesCopy = [...replies]

        const newId = (Number(currentId) + 1).toString()
        let date = new Date()
            .toISOString()
            .split('T')[0]
            .split('-')
            .reverse()
            .join('/')

        const replyBody = {
            id: newId,
            name,
            date,
            text: replyValue,
            textColor: colors[0],
            nameColor: colors[0]
        }

        repliesCopy.push(replyBody)

        const body = {
            replies: repliesCopy,
        }

        fetch(`${api}/messages/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'PATCH',
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then((res) => {
                console.log('res', res)
                fetch(`${api}/currentId`, {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: 'PATCH',
                    body: JSON.stringify({"id": newId})
                })
                    .then(res => res.json())
                    .then(res => {
                        dispatch(setId(res.id))
                    })

                dispatch(setReplyMessage({id, reply: replyBody}))
            })
            .catch(err => console.log(err))
    }

    const reply = () => {
        setIsReply(prev => !prev)
        setIsDeleting(false)
        setIsEditing(false)
    }

    const handleReplyText = e => {
        setReplyValue(e.target.value)
    }

    const toggleDeleteMsg = () => {
        setIsDeleting(prev => !prev)
        setIsEditing(false)
        setIsReply(false)
    }

    return (
        <>
            <p style={{color: nameColor}}>{name}</p>
            <p>{date}</p>
            {
                isEditing ?
                    <div className='new-post'>
                        <h3>Edit</h3>
                        <div className='new-post_inputs'>
                            <textarea
                                value={textValue}
                                onChange={handleTextChange}
                                className='new-post_area'
                            />
                        </div>
                        <button onClick={() => saveChanges(item, textValue)} className='btn'>Save</button>
                    </div>
                    :
                    <p style={{color: textColor, maxWidth: '55%', textAlign: 'center'}}>{textValue}</p>
            }
            <div className='action-buttons'>
                {
                    isUserMessage && fromPopup && <button
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
                        <p>Are you sure to delete this message?</p>
                        <div className='delete-buttons'>
                            <button className='btn danger' onClick={() => handleMessageDelete(id)}>Yes</button>
                            <button className='btn green' onClick={toggleDeleteMsg}>No</button>
                        </div>
                    </div>
                )
            }
            {
                fromPopup && isReply && (
                    <div className='delete-message'>
                        <NewPost
                            textValue={replyValue}
                            changeHandler={handleReplyText}
                            postHandler={handleMessageReply}
                            buttonText='Reply'
                        />
                    </div>
                )
            }
        </>
    )
}

export default memo(MessageComp)
