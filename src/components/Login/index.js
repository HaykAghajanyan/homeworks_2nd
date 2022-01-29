import { useNavigate } from 'react-router-dom';  
import React from 'react';  
import { useDispatch, useSelector } from 'react-redux';
import Messages from "../Messages"
const Login = () => {
    const name=useSelector(function(state) {
        return state.currentUser.name;
    });
    const dispatch=useDispatch();
    let navigate = useNavigate();
    return (
        <>
         <div className="login">
               Login: 
                      <input
                              type="email" 
                              placeholder={`Enter your email  ${name}`}
                              onChange={(e)=> {
                                dispatch({
                                     type:"edit-login",
                                     payload: {
                                               name:e.target.value
                                    }
                                })
                           }}
                       >
                       </input>
               Password:
                       <input type="password" placeholder="Enter your password" minLength="8" maxLength="15" >
                       </input>
                <button 
                      onClick={ () => navigate('/') }>
                      Loin
                </button>
                       <span> 
                           Your Login is ex:{name}
                      </span>
         </div>

        </>
    )
}

export default Login
