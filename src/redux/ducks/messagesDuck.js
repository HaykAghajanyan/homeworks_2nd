import {createAction} from "../../helpers/reduxSelctors"

const CHANGE_MESSAGES_DATA = 'messagesDuck/CHANGE_MESSAGES_DATA'
const CHANGE_CHAT_DATA = 'messagesDuck/CHANGE_CHAT_DATA'
const CHANGE_COLOR = 'messagesDuck/CHANGE_COLOR'
const CHANGE_TARGET = 'messagesDuck/CHANGE_TARGET'

export const changeMessagesData = createAction(CHANGE_MESSAGES_DATA)
export const changeChatsData = createAction(CHANGE_CHAT_DATA)
export const changeColorR = createAction(CHANGE_COLOR)
export const changeTarget = createAction(CHANGE_TARGET)




const initialState = {
    color: '#000000',
    target: '1',
    messages:[],
    chat:[]
}

const MessagesDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_COLOR:
            return {
                ...state,
                color: payload
            }
        case CHANGE_TARGET:
            return {
                ...state,
                target: payload
            }
        case CHANGE_MESSAGES_DATA:
            return {
                ...state,
                messages: payload
            }
        case CHANGE_CHAT_DATA:
            return {
                ...state,
                chat: payload
            }
        default: return state
    }
}

export default MessagesDuck