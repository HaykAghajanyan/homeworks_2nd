import {changeAuthRoute} from "../../redux/ducks/appDuck";
import {AUTH_ROUTES} from "../../helpers/constants";
import {useDispatch} from "react-redux";

const Registration = () => {
    const dispatch = useDispatch()

    return (
        <div>Registration
            <button onClick={() => dispatch(changeAuthRoute(AUTH_ROUTES[0]))}>to login</button>
        </div>
    )
}

export default Registration
