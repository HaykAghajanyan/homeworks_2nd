import {createAction} from "../../helpers/redux";

// constants
const GET_MESSAGES = 'messageDuck/GET_MESSAGES'
const CHANGE_TEXT = 'messageDuck/CHANGE_TEXT'

// action creators
const setMessages = createAction(GET_MESSAGES)
export const changeMessageText = createAction(CHANGE_TEXT)

export const fetchMessages = () => (dispatch) => {
    fetch('/db.json')
        .then(res => res.json())
        .then(res => dispatch(setMessages(res.messages)))
        .catch(e => console.log('error from messagesContext', e))
}

// reducer
const initialState = {
    messages: []
}

const messageDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: payload
            }
        case CHANGE_TEXT:
            const currentMessage = state.messages.find(message => message.id === payload.id)
            currentMessage.text = payload.text

            return {
                ...state,
            }
        default: return state
    }
}

export default messageDuck
