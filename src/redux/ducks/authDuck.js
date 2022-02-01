import {createAction} from "../../helpers/reduxSelctors"

const CHANGE_AUTH_USER = 'authDuck/CHANGE_AUTH_USER'

export const changeAuthUser = createAction(CHANGE_AUTH_USER)

const initialState = {
    auth: null
}

const AuthDuck = (state = initialState, action)=>{
    switch (action.type) {
        case CHANGE_AUTH_USER:
            return {
                ...state,
                auth: action.payload
            }
        default:
            return state
    }
}
export default AuthDuck