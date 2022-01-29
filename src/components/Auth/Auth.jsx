import React, {useContext, useState} from 'react'

import './auth.css'
import {Link, useNavigate} from "react-router-dom";
import {StoreContext} from "../../index";


const Auth = ({text, to}) => {
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const store = useContext(StoreContext)
    const navigate = useNavigate()

    const auth = () => {
        if (text !== "Login") return;

        fetch('messages.json')
            .then(res => res.json())
            .then(json => {
                const users = json.users

                users.forEach(user => {
                    if (user.login === login && user.password === password) {
                        store.auth = true
                        store.login = login
                        navigate("/list")
                    }
                })
            })
    }


    return (
        <div className="container">
            <div className="auth">
                <input
                    type="text"
                    onChange={(e) => setLogin(e.target.value)}/>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}/>

                <div className="flex flex-row align-center space-between">
                    <Link to={"/" + to.toLowerCase()}>
                        {to}
                    </Link>
                    <button
                        className="btn-login"
                        onClick={ auth }>
                        {text}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth