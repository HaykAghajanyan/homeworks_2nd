import React , { useEffect,useState} from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import {changeAuthUser} from "../../../redux/ducks/authDuck"

// STYLES
import style from "./style.module.css"

async function registrationUser(data) {
    return fetch(`http://localhost:8080/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    })
    .catch(res => console.log('login error'))
    .then((res) => {
        sessionStorage.setItem('token', data.token)
        return data
    })
   }
const Login = () => {
    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch()

    const handleSubmit = async e => {
        e.preventDefault();
        if(email && password && username ){
            const data = await registrationUser({
                "email": email,
                "passwoard": password,
                "userName": username,
                "token": `${Math.random().toString(36).substr(2)}`,
                "date": new Date().getFullYear()
            });
            if(data){
                dispatch(changeAuthUser(data)) 
            }
        }
    }
   
   
    
    return (
            
            <div className={style.login_box}>
                 <h3>Login</h3>
                <div className={style.form_box}>
                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email"  onChange={e => setEmail(e.target.value)} className={style.email} placeholder="Enter email"/>
                        
                        <label htmlFor="userName">User Name</label>
                        <input id="userName" type="text"  onChange={e => setUserName(e.target.value)} className={style.userName} placeholder="Enter UserName"/>
                    
                        <label htmlFor="Password">Password</label>
                        <input id="Password" type="text" onChange={e => setPassword(e.target.value)} className={style.passoward} placeholder="Enter Password"/>
                        
                        <button className={style.loginBtn} type="submit">Login</button>
                        <div style={{height:'1rem'}}></div>
                        <Link to="/login" className={style.createNew}> <span >Sign IN</span></Link>
                    </form>
                </div>
            </div>
            
    )
}
export default Login
