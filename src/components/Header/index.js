import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeRoute} from "../../redux/ducks/appDuck";
import {changeCurrentUser} from "../../redux/ducks/usersDuck";

const Header = () => {
    const dispatch = useDispatch()

    const {currentUser} = useSelector(({usersDuck}) => usersDuck)

    const handleRouteChange = (route) => {
        dispatch(changeRoute(route))
    }
    const logOut = () => {
        dispatch(changeCurrentUser(null))
        window.localStorage.removeItem('user')
    }

    return (
        <header className='header'>
            <NavLink onClick={() => handleRouteChange('')} className='navLink' to=''>to Messages</NavLink>
            <NavLink onClick={() => handleRouteChange('configs')} className='navLink' to='configs'>to Configs</NavLink>
            {
                currentUser ?
                    <div style={{display: 'flex', marginRight: 10}}>
                        <p>{currentUser.userName}</p>
                        <button onClick={logOut}>Log out</button>
                    </div>
                    :
                    <NavLink onClick={() => handleRouteChange('auth')} className='navLink' to='auth'>Auth</NavLink>
            }
        </header>
    )
}

export default Header
