import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className="nav-bar">
            <NavLink className="page-selector" to="/Messages" >
                Messages
            </NavLink>
            <NavLink className="page-selector" to="/Selectors" >
                Selectors
            </NavLink>
        </div>
    );
}

export default NavBar;