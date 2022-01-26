import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <NavLink className="page-selector" to="/" >
                Messages
            </NavLink>
            <NavLink className="page-selector" to="/selectors" >
                Selectors
            </NavLink>
        </div>
    );
}

export default NavBar;