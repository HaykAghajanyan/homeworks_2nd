// constants

import {createAction} from "../../helpers/redux";

const CHANGE_CURRENT_USER = 'usersDuck/CREATE_NEW_USER'

// action creators
export const changeCurrentUser = createAction(CHANGE_CURRENT_USER)

// reducer
const initialState = {
    currentUser: JSON.parse(window.localStorage.getItem('user')) || null,
}

const usersDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default: return state
    }
}

export default usersDuck
