import React, { useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
// import { useEffect } from "react/cjs/react.production.min"
import './login.css'


const UserLog = ({ handleLogin }) => {

    const [users, setUsers] = useState([])
    // const [password, setPassword] = useState('')
    // const [logedUser, setLogedUser] = useState('')
    //  const navigate = useNavigate()
const[details,setDetails]=useState({username:'', password:''})


    useEffect(() => {
        fetch('/users.json')
            .then((res) => res.json())
            .then((res) => setUsers(res))
    }, [])
    const changeUser = (evt => setDetails({...details,username:evt.target.value}))
    const changePassword = (evt => setDetails({...details,password:evt.target.value}))
    const handleLog = (e) => {
        e.preventDefault()
        const filteredUser = users.filter(item => item.userName === details.username && item.password === details.password)
        filteredUser.length === 1 ? handleLogin(details) : alert('your username or password is not valid')
        console.log(filteredUser)

    }

    return (
        <form onSubmit={handleLog}>
            <div className='loginPart'>
                <h2>Login</h2>
                <div>
                <label htmlFor ='name'>Username :</label>
                <input onChange={changeUser} value={details.username} className='inputElem' type='text' id='name' />
                </div>
                <div>
                <label htmlFor='password'>Password  : </label>
                <input onChange={changePassword} className='inputElem' value={details.password} type='password' id='pass' />
                </div> 
                <input type='submit' value='Login'  className='buttonStyle'/>

            </div>
        </form>
    )
}
export default UserLog
