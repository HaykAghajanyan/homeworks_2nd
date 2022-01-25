import React, { createContext, useState, useEffect, useContext, useReducer } from "react";

const ACTION_TYPES = {
    CHANGE_NAME_COLOR: 'CHANGE_NAME_COLOR',
    CHANGE_TEXT_COLOR: 'CHANGE_TEXT_COLOR'
}

function reducer(state, action) {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_NAME_COLOR: {
            return ;
        }
        case ACTION_TYPES.CHANGE_TEXT_COLOR: {
            return;
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

const Store = createContext([])

const initialState = {
    messages: []
}

const StoreProvider = ({ children }) => {
    const [messages, setMessages] = useState(initialState)
    //const [messages, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('/db.json')
            .then(res => res.json())
            .then(res => setMessages(res.messages))
    },[])

    return (
        <Store.Provider value={{messages, setMessages}}>
            {children}
        </Store.Provider>
    )
}

const useStore = () => useContext(Store)

export {
    StoreProvider,
    useStore
}

