import React, {useState} from 'react';
import './logIn.css'

function LogInForm({ login, error, handleUser}) {

    const [details, setDetails] = useState({username: '', password: ''});

    const submitHandler = e => {
        e.preventDefault();
        login(details);
    }


    return (
        <div>
            <form className='formIn' onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>LogIn</h2>
                    {(error !== '')? (<div className='error'>{error}</div>) : ''}
                    <div className='form-group'>
                        <label htmlFor="username">Name: </label>
                        <input className='login' type="text"  onChange={e => setDetails({...details, username: e.target.value} )} value={details.username}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password:  </label>
                        <input className='login' type="password"
                               onChange={e => setDetails({...details, password: e.target.value} )} value={details.password}/>
                    </div>
                    <button className='logBtn' onClick={() => handleUser(details.username)}>LOGIN</button>

                </div>
            </form>
        </div>
    );
}

export default LogInForm;