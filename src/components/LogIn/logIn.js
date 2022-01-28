import React, {useCallback, useState} from 'react';
import LogInForm from "./logInForm";
import {users} from "../../helpers/constants";
import './logIn.css'
import { useNavigate} from "react-router-dom";


function LogIn({configs}) {
    const navigate = useNavigate();
    const [user, setUser] = useState({username: ''});
    const [error, setError] = useState('');

    const login = useCallback((details) => {
        users.forEach(user => {
            if(details.username === user.name && details.password === user.password) {
                setUser({
                    username: details.username
                });
            } else {
                setError('Details do not match')
            }
        })
    }, [])




    const logout = () => {
        setUser({username: ''});
    }

    return (
        <div className='logIn'>
            {(user.username !== '') ? (
                <div className='welcome'>
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button onClick={logout}>LOGOUT</button>
                </div> ,
                navigate("messages")
            ): (
                <LogInForm login={login} error={error}/>
            )
            }
        </div>
    );
}

export default LogIn;