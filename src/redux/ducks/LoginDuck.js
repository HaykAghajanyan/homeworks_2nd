const LOG_IN = 'loginDuck/LOG_IN';

const initialState = {
    username: '',
    password: '',
    isLoggedIn: false
};

export const login = (payload) => ({
    type: LOG_IN,
    payload
});

const LoginDuck = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.payload.isLoggedIn ? {
                username: action.payload.username,
                password: action.payload.password,
                isLoggedIn: true
            } : {
                username: '',
                password: '',
                isLoggedIn: false
            };
    }
    return state;

};

export default LoginDuck;
