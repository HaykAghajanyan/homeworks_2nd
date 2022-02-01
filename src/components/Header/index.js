import {NavLink} from "react-router-dom";

const Header = ({showMessages}) => (
    <header className='header'>
        <NavLink className='navLink' to=''>Login</NavLink>
        {showMessages ? <NavLink className='navLink' to='messages'>to Messages</NavLink> : null}
        <NavLink className='navLink' to='configs'>to Configs</NavLink>
    </header>
)

export default Header
