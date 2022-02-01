import {createAction} from "../../helpers/redux";
import {AUTH_ROUTES} from "../../helpers/constants";
import {api} from "../../helpers/api";

const SET_ID = 'appDuck/SET_ID'
const CHANGE_ROUTE = 'appDuck/CHANGE_ROUTE'
const CHANGE_AUTH_ROUTE = 'appDuck/CHANGE_AUTH_ROUTE'

export const setId = createAction(SET_ID)
export const changeRoute = createAction(CHANGE_ROUTE)
export const changeAuthRoute = createAction(CHANGE_AUTH_ROUTE)
export const fetchId = () => (dispatch) => {
    fetch(`${api}/currentId`)
        .then(res => res.json())
        .then(res => {
            dispatch(setId(res.id))
        })
        .catch(err => console.log(err))
}

const initialState = {
    route: '',
    authRoute: AUTH_ROUTES[0],
    currentId: ''
}

const AppDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_ROUTE:
            return {
                ...state,
                route: payload
            }
        case CHANGE_AUTH_ROUTE:
            return {
                ...state,
                authRoute: payload
            }
        case SET_ID:
            return {
                ...state,
                currentId: payload
            }
        default:
            return state
    }
}

export default AppDuck
