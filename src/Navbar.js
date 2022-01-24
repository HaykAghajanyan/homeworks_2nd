import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='nav' >
            <div className='column left'>
                <Link to='/messages'>Messages</Link><br/>
            
                <Link to='/main'>Main</Link><br />
                </div>
        </nav>
    )
}

export default Navbar;