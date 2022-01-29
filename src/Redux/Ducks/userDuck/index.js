const SET_LOGGED_USER = "userDuck/SET_LOGGED_USER";
const ADD_NEW_USER = "userDuck/ADD_NEW_USER";
const SET_CREDENTIALS = "userDuck/SET_CREDENTIALS";


export const setLoggedUser = (payload) => ({
    type: SET_LOGGED_USER,
    payload
});


export const addNewUser = (payload) => ({
    type: ADD_NEW_USER,
    payload
});

export const setCredentials = (payload) => ({
    type: SET_CREDENTIALS,
    payload
});


const initialState = {
    currentUser: {},
    credentials: [{}]

};


const UserDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_LOGGED_USER:
            return {...state, currentUser: {...payload, isLoggedIn: true}};
        case ADD_NEW_USER:
            return {...state, credentials: [...state.credentials, payload ]};
        case SET_CREDENTIALS:
            return {...state, credentials: payload};

        default:
            return state;
    }
};


export default UserDuck;