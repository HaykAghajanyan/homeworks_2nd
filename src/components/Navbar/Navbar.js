import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/' className={({isActive}) => isActive ? style.active : style.item }>Messages</NavLink>
            <NavLink to='/settings' className={({isActive}) => isActive ? style.active : style.item }>Settings</NavLink>
        </nav>
    )
}

export default Navbar;
