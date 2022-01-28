const SET_LOGGED_USER = "userDuck/SET_LOGGED_USER";


export const setLoggedUser = (payload) => ({
    type: SET_LOGGED_USER,
   payload
});

const initialState = {
    currentUser: {},

};


const UserDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_LOGGED_USER:
            return {...state, currentUser: {...payload, isLoggedIn: true}};
        default:
            return state;
    }
};


export default UserDuck;