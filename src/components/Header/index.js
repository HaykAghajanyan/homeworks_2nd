import {NavLink} from "react-router-dom";

const Header = ({isLoggedIn}) => {
    return (
        <header className='header'>
            <NavLink className='navLink' to='login'>Login</NavLink>
            <NavLink className='navLink' to=''>to Messages</NavLink>
            {isLoggedIn && <NavLink className='navLink' to='add-message'>Add Message</NavLink>}
            <NavLink className='navLink' to='configs'>to Configs</NavLink>
        </header>
    );
};

export default Header
