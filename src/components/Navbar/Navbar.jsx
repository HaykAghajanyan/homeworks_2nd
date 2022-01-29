import React, {useContext} from 'react';
import './navbar.css';
import {Link, useNavigate,} from 'react-router-dom';
import {StoreContext} from "../../index";

const Navbar = () => {

    const store = useContext(StoreContext)
    const navigate = useNavigate()

    const onLogout = () => {
        store.auth = false
        navigate("/login")
    }

    return (
        <header>
            {
                store.auth ?
                    <>
                        <Link
                            className="text-big-size no-underline no-active text-black on-hover"
                            to="list">
                            To message list
                        </Link>
                        <Link
                            className="text-big-size no-underline no-active text-black on-hover"
                            to="new"
                        >
                            Add New Message
                        </Link>
                        <Link
                            className="text-big-size no-underline no-active text-black on-hover"
                            to="change">
                            To message color change
                        </Link>
                        <span
                            onClick={onLogout}
                            className="text-big-size no-underline no-active text-black on-hover pointer"
                        >
                        Logout
                    </span>
                    </>

                    :
                    <>
                        <Link
                            className="text-big-size no-underline no-active text-black on-hover"
                            to="login">
                            Login
                        </Link>
                        <Link
                            className="text-big-size no-underline no-active text-black on-hover"
                            to="registration">
                            Registration
                        </Link>
                    </>
            }

        </header>
    );
};
export default Navbar;
