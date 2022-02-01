import {changeAuthRoute, changeRoute} from "../../redux/ducks/appDuck";
import {AUTH_ROUTES} from "../../helpers/constants";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {changeCurrentUser} from "../../redux/ducks/userDuck";
import {useNavigate} from "react-router-dom";
import {api} from "../../helpers/api";

const failureMessage = 'wrong username or password'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false)
    const [isAuthFailed, setIsAuthFailed] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUserNameChange = e => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const gotoRegister = () => dispatch(changeAuthRoute(AUTH_ROUTES[1]))

    const checkUser = () => {
        fetch(`${api}/users`)
            .then(res => res.json())
            .then(res => {
                console.log('res', res)
                const user = res.find(user => user.userName === userName && user.password === password)

                if(!user) {
                    setIsAuthFailed(true)
                } else {
                    dispatch(changeCurrentUser(user))
                    dispatch(changeRoute(''))
                    localStorage.setItem('user', JSON.stringify(user))
                    navigate('..')
                }
            })
    }

    return (
        <div className='message-item'>
            {
                isAuthFailed && <p>{failureMessage}</p>
            }
            <div className='auth-item'>
                <p>Login</p>
                <input
                    value={userName}
                    onChange={handleUserNameChange}
                    className='auth-input'
                    type="text"
                />
            </div>

            <div className='auth-item'>
                <p>Password</p>
                <input
                    value={password}
                    onChange={handlePasswordChange}
                    className='auth-input'
                    type="password"
                />
            </div>
            <div className='auth-item'>
                <button onClick={checkUser}>Log in</button>
                {
                    isAuthFailed && <button onClick={gotoRegister}>Registrate now</button>
                }
            </div>





            {/*<button onClick={() => dispatch(changeAuthRoute(AUTH_ROUTES[1]))}>go to login</button>*/}
        </div>
    )
}

export default Login
