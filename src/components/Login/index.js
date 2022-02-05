import {useDispatch} from "react-redux";
import {changeAuthRoute} from "../../redux/ducks/appDuck";
import {AUTH_ROUTES} from "../../helpers/constants";

const Login = () => {
    const dispatch = useDispatch()

    const clickHandler = () => {
        localStorage.setItem('user', JSON.stringify({
            "id": "1",
            "userName": "Hayk",
            "password": "1234"
        }))
    }

    return (
        <div>Login
            <button onClick={clickHandler}>log in</button>
        </div>
    )
}

export default Login
