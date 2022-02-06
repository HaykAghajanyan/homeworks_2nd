const CHANGE_LANGUAGE = 'appDuck/CHANGE_LANGUAGE'
const CHANGE_ROUTE = 'appDuck/CHANGE_ROUTE'

export const changeRoute = (payload) => ({
    type: CHANGE_ROUTE,
    payload

}) 
export const changeLanguage = (payload) => ({
    type: CHANGE_LANGUAGE,
    payload

})

const initialState = {
    route: '',
    language: 'en'

}

const AppDuck = (state = initialState, {type, payload}) => {
    switch(type){
        case CHANGE_ROUTE:
            return{
                ...state,
                route: payload
            }
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: payload 
            }
        default: return state
    }

}

export default AppDuck