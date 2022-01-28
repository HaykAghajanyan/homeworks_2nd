import React, {useState} from 'react';
import {useMessagesData} from "../../contexts/messagesContext";

function NewMessage({loggedUser}) {
    const {messages} = useMessagesData()
    const [newUser, setNewUser] = useState({name: '', date: '', text:""});
    const [theArray, setTheArray] = useState(messages);


    const handelUser = () => {
        setTheArray( [...theArray, newUser])
        console.log(newUser)
        console.log(messages)
        console.log(loggedUser)
    }

    return (
        <div>
            <button onClick={handelUser}>Add User</button>
        </div>
    );
}

export default NewMessage;