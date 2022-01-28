
const ADD_USER = 'user/ADD_USER';
const LOGIN_USER = 'user/LOGIN_USER';

export const addUser = (payload) => ({type: ADD_USER, payload});

const initialState = {
    user: {
        username: '',
        email: '',
        password: ''
    },
    users: [],
}

const userDuck = ( state = initialState, {type, payload}) => { 
    
    switch(type) {

        case ADD_USER: 
            return {
                ...state,
                users: payload
            }
        case LOGIN_USER: 
            return {
                ...state,
                user: ( state.users.find( user => (user.username === payload.username && user.password === payload.password ) ) || state.user )
            }
        default:
            return state;
    }

}

export default userDuck;