import React, { useState } from 'react';
import massages from './FakeData'
import { Link, useLocation } from 'react-router-dom';

const Testomponent = ({color,user}) => {
    const {state} = useLocation()
    console.log(user,color,"LLLLLLL");
    return <div>
        <button>
            <Link to="/settings">
                Settings
            </Link>
        </button>
        {massages.map((art, index) => {
            return <div key={art.id}>
                <p style={{color:`${user === 'text'? "" : color}`}}>
                    {art.name}
                </p>
                <p style={{color:`${user === 'text'? color : ""}`}}>
                    {art.text}
                </p>
                <hr />
            </div>
        })}

    </div>;
};

export default Testomponent