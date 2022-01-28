import {colors, target} from "../../../helpers/constants";
import UserDuck from "../userDuck";

const COLOR = "appDuck/COLOR";
const CHANGE_TEXT_CLASS = "appDuck/CHANGE_TEXT_CLASS";
const CHANGE_TARGET = "appDuck/CHANGE_TARGET";
const CHANGE_NAME_CLASS = "appDuck/CHANGE_NAME_CLASS";
const FETCH_USERS = "appDuck/FETCH_USERS";
const ADD_MESSAGE = "appDuck/ADD_MESSAGE";


export const changeColor = (payload) => ({
    type: COLOR,
    payload
});

export const changeNameClass = (payload) => ({
    type: CHANGE_NAME_CLASS,
    payload
});


export const changeTextClass = (payload) => ({
    type: CHANGE_TEXT_CLASS,
    payload
});


export const changeTarget = (payload) => ({
    type: CHANGE_TARGET,
    payload
});

export const fetchUsers = (payload) => ({
    type: FETCH_USERS,
    payload
});

export const addMessage = (payload) => ({
    type: ADD_MESSAGE,
    payload
});


const initialState = {
    messages: [],
    textClass: colors.BLACK,
    nameClass: colors.BLACK,
    color: colors.GREEN,
    target: target.NAME
};


const AppDuck = (state = initialState, {type, payload}) => {

    switch (type) {
        case COLOR:
            return {...state, color: payload};
        case    CHANGE_TEXT_CLASS:
            return {...state, textClass: payload};
        case CHANGE_TARGET:
            return {...state, target: payload};
        case CHANGE_NAME_CLASS:
            return {...state, nameClass: payload};
        case FETCH_USERS:
            return {...state, messages: payload};
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages,  payload]};

        default:
            return state;
    }
};

export default AppDuck;