import React, {useState} from 'react';
import './logIn.css'

function LogInForm({ login, error }) {

    const [details, setDetails] = useState({username: '', password: ''});

    const submitHandler = e => {
        e.preventDefault();
        login(details);
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>LogIn</h2>
                    {(error !== '')? (<div className='error'>{error}</div>) : ''}
                    <div className='form-group'>
                        <label htmlFor="username">Name: </label>
                        <input type="text" name='username' id='username' onChange={e => setDetails({...details, username: e.target.value} )} value={details.username}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password:  </label>
                        <input type="password" name='password' id='password'
                               onChange={e => setDetails({...details, password: e.target.value} )} value={details.password}/>
                    </div>
                    <input type="submit" value='LOGIN' />
                </div>
            </form>
        </div>
    );
}

export default LogInForm;