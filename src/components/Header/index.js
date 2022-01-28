import {NavLink} from "react-router-dom";

const Header = () => (
    <header className='header'>
        <NavLink className='navLink' to=''>LogIn</NavLink>
        <NavLink className='navLink' to='messages'>to Messages</NavLink>
        <NavLink className='navLink' to='addMessage'>Add Messages</NavLink>
        <NavLink className='navLink' to='configs'>to Configs</NavLink>
    </header>
)

export default Header
