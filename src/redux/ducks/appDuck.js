const CHANGE_ROUTE = 'appDuck/CHANGE_ROUTE'
const CHANGE_LANGUAGE = 'appDuck/CHANGE_LANGUAGE'

export const changeRoute = (payload) => ({
    type: CHANGE_ROUTE,
    payload
})

export const changeLanguage = (payload) => ({
    type: CHANGE_LANGUAGE,
    payload
})

const initialState = {
    language: 'en',
    route: ''
}

const AppDuck = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ROUTE:
            return {
                ...state,
                route: action.payload
            }
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        default:
            return state
    }
}

export default AppDuck
