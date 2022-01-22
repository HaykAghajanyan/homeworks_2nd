import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (<header>
            <Link className="text-big-size no-underline" to="list">To message list</Link>
            <Link className="text-big-size no-underline" to="change">To message color change</Link>
        </header>);
};
export default Navbar;
