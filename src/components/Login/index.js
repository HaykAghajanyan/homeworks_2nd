import React, { useState } from "react";
import { useMessagesData } from "../../contexts/messagesContext";

const Login = ({hendleLogin}) =>{

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState(true);

    const {messages} = useMessagesData();

    const hendleName = e =>{
        setName(e.target.value);
    };

    const hendlePassword = e =>{
        setPassword(e.target.value)
    };

    const formeSubmit = (e) =>{
        e.preventDefault();
        
        messages.map(item =>{
            item.reply = [];

            if(item.name === name && item.password === password){
                item.login = true;
                hendleLogin(name, password);
            }else{
                item.login = false;
                setConfirm(prev => !prev);
            }
        })
    }

    return(
        <div className="login">
            <form onSubmit={formeSubmit}>
                <input
                    type='text'
                    name='text'
                    placeholder='Name'
                    value={name}
                    onChange={hendleName}
                    required
                />
                <input
                    style={confirm ? {border: '1px solid black'} : {border: '3px solid red'}}
                    type='password'
                    name='password'
                    placeholder="Password"
                    value={password}
                    onChange={hendlePassword}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;