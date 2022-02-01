import {NavLink} from "react-router-dom";

const Header = () => (
    <header className='header'>
        <NavLink className='navLink' to=''>to Messages</NavLink>
        <NavLink className='navLink' to='configs'>to Configs</NavLink>
        <NavLink className='navLink' to='login'>Log in</NavLink>
        <NavLink className='navLink' to='register'>Register</NavLink>
    </header>
)

export default Header
