import React from "react";
import style from './Login.module.css'
import { useMessagesData } from "../../App.js";
import { TextField } from "@mui/material";
import axios from "axios";

const LogIn = ({ isLoggedIn, setIsLoggedIn, setUser, user }) => {
    const { users, setUsers } = useMessagesData()


    const loginElement = React.useRef(null);
    const passwardElement = React.useRef(null)

    const signUpElement = React.useRef(null);
    const signUpPassElement = React.useRef(null)


    const handleLogIn = () => {
        let index = users.findIndex(i => i.login === loginElement.current.value)
        setTimeout(() => {
            if (index < 0) {
                alert('User not found')
            } else {
                if (users[index].passward === passwardElement.current.value) {
                    setIsLoggedIn(!isLoggedIn)
                } else {
                    alert('Incorrect passward')
                }
            }
        }, 700)
        setUser(loginElement.current.value)
    }

    const handleSignUp = () => {
        let newUser = { "id": users.length + 1, "login": signUpElement.current.value, "passward": signUpPassElement.current.value }
        axios.post('https://61b8b44138f69a0017ce5cd7.mockapi.io/orders', newUser)
        setUsers(prev => [...prev , newUser])
        setTimeout(() => {
            setIsLoggedIn(!isLoggedIn)
            setUser(signUpElement.current.value)
        }, 700)
    }


    return (
        <div>
            <div className={style.logInPage}>
                <div className={style.inputs}>
                    <TextField
                        inputRef={loginElement}
                        required
                        id="outlined-required"
                        label="LogIn"
                        variant="standard"
                    />
                </div>
                <div className={style.inputs}>
                    <TextField
                        inputRef={passwardElement}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                </div>
                <button className={style.logBtn} onClick={handleLogIn}>Log In</button>
                <div className={style.or}>
                    Or you can sign up
                </div>
                <div className={style.inputs}>
                    <TextField
                        inputRef={signUpElement}
                        required
                        id="outlined-required"
                        label="LogIn"
                        variant="standard"
                    />
                </div>
                <div className={style.inputs}>
                    <TextField
                        inputRef={signUpPassElement}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                </div>
                <button onClick={handleSignUp} className={style.logBtn}>Sign Up</button>
            </div>
            <div className={style.logInPage}>
            </div>
        </div>
    )
}

export default LogIn;