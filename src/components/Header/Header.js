import style from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn, setUser }) => {

    const handleLogOut = () => {
        setTimeout(() => {
            setIsLoggedIn(!isLoggedIn)
            setUser('')
        }, 700)
    }

    return (
        <header className={style.header}>
            {
                isLoggedIn ?
                    <>
                        <div className={style.headerButtons}>
                            <NavLink className={style.navLink} to='message'>Messages</NavLink>
                            <NavLink className={style.navLink} to='configs'>Configs</NavLink>
                        </div>
                        <div className={style.headerButtons}>
                            <NavLink className={style.logIn} to=''>
                                <a>Profile</a>
                                <img width={34} height={34} src="/img/user.png" alt="user" />
                            </NavLink>
                            <button className={style.navLink} onClick={handleLogOut}>LogOut</button>
                        </div>

                    </> :
                    <div className={style.please}>
                        <a>Please login for first</a>
                    </div>
            }
        </header>
    )
}

export default Header
