import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeRoute} from "../../redux/ducks/appDuck";
import {userSelector} from "../../helpers/reduxSelctors";
import {changeCurrentUser} from "../../redux/ducks/userDuck";

const Header = () => {
    const dispatch = useDispatch()

    const {currentUser} = useSelector(userSelector)

    const handleRouteChange = (route) => {
        dispatch(changeRoute(route))
    }

    const logOut = () => {
        dispatch(changeCurrentUser(null))
        localStorage.removeItem('user')
    }

    return (
        <header className='header'>
            <NavLink onClick={() => handleRouteChange('')} className='navLink' to=''>to Messages</NavLink>
            <NavLink onClick={() => handleRouteChange('configs')} className='navLink' to='configs'>to Configs</NavLink>
            {
                currentUser ?
                    <button onClick={logOut}>Log out</button>
                    :
                    <NavLink onClick={() => handleRouteChange('auth')} className='navLink' to='auth'>to Auth</NavLink>
            }
        </header>
    )
}

export default Header
