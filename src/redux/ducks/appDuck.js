import {createAction} from "../../helpers/redux";
import {AUTH_ROUTES} from "../../helpers/constants";

console.log('AUTH_ROUTES', AUTH_ROUTES)

const CHANGE_ROUTE = 'appDuck/CHANGE_ROUTE'
const CHANGE_LANGUAGE = 'appDuck/CHANGE_LANGUAGE'
const CHANGE_AUTH_ROUTE = 'appDuck/CHANGE_AUTH_ROUTE'

export const changeRoute = createAction(CHANGE_ROUTE)
export const changeLanguage = createAction(CHANGE_LANGUAGE)
export const changeAuthRoute = createAction(CHANGE_AUTH_ROUTE)

const initialState = {
    language: 'en',
    route: '',
    authRoute: AUTH_ROUTES[0]
}

const AppDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_ROUTE:
            return {
                ...state,
                route: payload
            }
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: payload
            }
        case CHANGE_AUTH_ROUTE:
            return {
                ...state,
                authRoute: payload
            }
        default:
            return state
    }
}

export default AppDuck
