
const ADD_MESSAGE = 'message/ADD_MESSAGE';
const LOAD_MESSAGE = 'message/LOAD_MESSAGE';
const REMOVE_MESSAGE = 'message/REMOVE_MESSAGE';
const CHANGE_COLOR = 'message/CHANGE_COLOR'
const CHANGE_TARGET = 'message/CHANGE_TARGET'

export const addMessage = (payload) => ({type: ADD_MESSAGE, payload});
export const loadMessage = (payload) => ({type: LOAD_MESSAGE, payload});
export const removeMessage = (payload) => ({type: REMOVE_MESSAGE, payload});
export const changeColor = (payload) => ({type: CHANGE_COLOR, payload});
export const changeTarget = (payload) => ({type: CHANGE_TARGET, payload});

const initialState = {
    color: 'black',
    target: 'textColor',
    message: {
        id: 0,
        name: '',
        date: '',
        text: '',
        textColor: 'black',
        nameColor: 'black'
    },
    messages: [],
}

export async function fetchMessages(dispatch) {
    let response = await fetch('./db.json');
    response = await response.json();
    dispatch( loadMessage(response.messages) );
}

const messageDuck = ( state = initialState, {type, payload}) => { 
    
    switch(type) {

        case ADD_MESSAGE: 
            return {
                ...state,
                messages: [...state.messages, payload]
            }
        case REMOVE_MESSAGE: 
            return {
                ...state,
                messages: state.messages.filter( message => (message.id !== payload.id ) ) 
            }
        case LOAD_MESSAGE: 
            return {
                ...state,
                messages: payload 
            }
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
        default:
            return state;
    }

}

export default messageDuck;