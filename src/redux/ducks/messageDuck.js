import {createAction} from "../../helpers/redux";
import {api} from "../../helpers/api";

const SET_MESSAGES = 'messageDuck/SET_MESSAGES'
const SET_NEW_MESSAGE = 'messageDuck/SET_NEW_MESSAGE'
const EDIT_MESSAGE = 'messageDuck/EDIT_MESSAGE'
const DELETE_MESSAGE = 'messageDuck/DELETE_MESSAGE'
const SET_REPLY_MESSAGE = 'messageDuck/SET_REPLY_MESSAGE'

const setMessages = createAction(SET_MESSAGES)
export const setNewMessage = createAction(SET_NEW_MESSAGE)
export const editMessage = createAction(EDIT_MESSAGE)
export const deleteMessage = createAction(DELETE_MESSAGE)
export const setReplyMessage = createAction(SET_REPLY_MESSAGE)
export const fetchMessages = () => (dispatch) => {
    fetch(`${api}/messages`)
        .then(res => res.json())
        .then(res => {
            dispatch(setMessages(res))
        })
        .catch(err => console.log(err))
}


const initialState = {
    messages: []
}

const MessageDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: payload
            }
        case SET_NEW_MESSAGE:
            const messages = [...state.messages, payload]
            return {
                ...state,
                messages,
            }
        case EDIT_MESSAGE:
            const messagesCopy = [...state.messages] //TODO: making copy of messages so as not to change the original array
            messagesCopy.splice(payload.id - 1, 1, payload.data)

            return {
                ...state,
                messages: messagesCopy
            }
        case DELETE_MESSAGE:
            const changedMessages = state.messages.filter(item => item.id !== payload)
            return {
                ...state,
                messages: changedMessages
            }
        case SET_REPLY_MESSAGE:
            const currentMessage = state.messages.find(item => item.id === payload.id)
            currentMessage.replies.push(payload.reply)
            return {
                ...state,
            }
        default: return state
    }
}

export default MessageDuck
