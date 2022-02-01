import React , { useEffect,useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import {changeAuthUser} from "../../../redux/ducks/authDuck"

// STYLES
import style from "./style.module.css"

async function loginUser({username,password}) {
    return fetch(`http://localhost:8080/users?email=${username}&passwoard=${password}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
      .then(data=>data[0])
      .catch(data => console.log('login error'))
      .then((data) => {
          sessionStorage.setItem('token', data.token)
          return data
      })
   }
const Login = () => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch()

    const handleSubmit = async e => {
        e.preventDefault();
        const data = await loginUser({
          username,
          password
        });
        if(data){
            dispatch(changeAuthUser(data)) 
        }
    }
   
   
    
    return (
            
            <div className={style.login_box}>
                 <h3>Login</h3>
                <div className={style.form_box}>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="userName">User Name</label>
                        <input id="userName" type="text"  onChange={e => setUserName(e.target.value)} className={style.userName} placeholder="Enter UserName"/>
                        <label htmlFor="Password">Password</label>
                        <input id="Password" type="text" onChange={e => setPassword(e.target.value)} className={style.passoward} placeholder="Enter Password"/>
                        <button className={style.loginBtn} type="submit">Login</button>
                        <div style={{height:'1rem'}}></div>
                        <Link to="/registration" className={style.createNew}> <span >Create a new account?</span></Link>
                    </form>
                </div>
            </div>
            
    )
}
export default Login
