

const ADD_USER = 'user/ADD_USER';

const addUser = (payload) => ({type: ADD_USER, payload});

const initialState = {
    user: {
        username: '',
        email: '',
        password: ''
    }
}

const userDuck = ( state = initialState, {type, payload}) => { 
    
    switch(type) {

        case ADD_USER: 
            return {
                ...state,
                user: payload
            }

    }

}