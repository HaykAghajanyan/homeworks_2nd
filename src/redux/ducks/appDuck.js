import {createAction} from "../../helpers/reduxSelctors"

const CHANGE_ROUTE = 'appDuck/CHANGE_ROUTE'

export const changeRoute = createAction(CHANGE_ROUTE)

const initialState = {
    route: ''
}

const AppDuck = (state = initialState, action)=>{
    switch (action.type) {
        case CHANGE_ROUTE:
            return {
                ...state,
                route: action.payload
            }
        default:
            return state
    }
}
export default AppDuck