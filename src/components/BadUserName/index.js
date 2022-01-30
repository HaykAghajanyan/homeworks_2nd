import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BadUserName() {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate("../login");
    }

    return (
        <nav className="wrong-pass">
            <p style={{color: "red"}}>Incorrect username or password!!</p>
            <button onClick={handleClick}>REENTER</button>
        </nav>
    
  )
}
