import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeRoute} from "../../redux/ducks/appDuck";

const Header = () => {
    const dispatch = useDispatch()

    const handleRouteChange = (route) => {
        dispatch(changeRoute(route))
    }

    return (
        <header className='header'>
            <NavLink onClick={() => handleRouteChange('')} className='navLink' to=''>to Messages</NavLink>
            <NavLink onClick={() => handleRouteChange('configs')} className='navLink' to='configs'>to Configs</NavLink>
        </header>
    )
}

export default Header
