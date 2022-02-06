import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { changeRoute } from "../../redux/ducks/appDuck"

const Header = () => {

    const dispatch = useDispatch()

    const handleChangeRoute = (route) => {
        dispatch(changeRoute(route))
    }

    return (

        <header className='navigation'>
            <NavLink onClick={() => handleChangeRoute('')} to="/"> Messages </NavLink>  
            <NavLink onClick={() => handleChangeRoute('change-colors')} to="/change-colors"> Select </NavLink> 
        </header>

    )
    
}

export default Header

//onClick={() => handleChangeRoute('/')}
//onClick={() => handleChangeRoute('/change-colors')}