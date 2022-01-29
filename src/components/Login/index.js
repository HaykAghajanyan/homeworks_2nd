import {changeAuthRoute, changeRoute} from "../../redux/ducks/appDuck";
import {useDispatch} from "react-redux";
import {AUTH_ROUTES} from "../../helpers/constants";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {changeCurrentUser} from "../../redux/ducks/usersDuck";

const failureMessage = 'wrong username or password'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [isAuthFailed, setIsAuthFailed] = useState(false)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const checkUser = () => {
        fetch('/db.json')
            .then(res => res.json())
            .then(res => {
                const user = res.users.find(user => user.userName === userName)
                if(!user) {
                    setIsAuthFailed(true)
                } else {
                    dispatch(changeCurrentUser(user))
                    dispatch(changeRoute(''))
                    window.localStorage.setItem('user', JSON.stringify(user))
                    navigate('..')
                }
            })
    }

    const changeUserName = e => {
        setUserName(e.target.value)
    }
    const changePassword = e => {
        setPassword(e.target.value)
    }

    return (
        <div className='message-item'>
            <div style={{padding: 5}}>
                {
                    isAuthFailed && <p>{failureMessage}</p>
                }
                <div className='auth-item'>
                    <p>User name</p>
                    <input
                        className='auth-input'
                        value={userName}
                        onChange={changeUserName}
                        type="text"
                    />
                </div>
                <div className='auth-item'>
                    <p>Password</p>
                    <input
                        className='auth-input'
                        value={password}
                        onChange={changePassword}
                        type="password"
                    />
                </div>
                <div className='auth-item'>
                    <button onClick={checkUser}>Log in</button>
                    {
                        isAuthFailed && <button onClick={() => dispatch(changeAuthRoute(AUTH_ROUTES[1]))}>to register</button>
                    }
                </div>
            </div>

        </div>
    )
}

export default Login
