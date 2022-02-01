import {useEffect, useState} from "react";
import {memo} from "react";
import { Navigate } from 'react-router-dom';
const Login = () => {
    const [errorMsg, setErrorMsg] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [nameInputValue, setNameInputValue] = useState('')
    const [passwordInputValue, setPasswordInputValue] = useState('')
  const user_db = [
    {
      id:1,
      username: "Alex",
      password: "pass1"
    },
    {
      id:2,
      username: "Hayk",
      password: "pass2"
    },
    {
        id:3,
        username: "Karen",
        password: "pass3"
      }
  ];
  const errors = {
    user_name: "invalid username",
    password: "invalid password"
  };
  const handleInputNameValue = e => {
    setNameInputValue(e.target.value)
}
const handleInputPasswordValue = e => {
    setPasswordInputValue(e.target.value)
}
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = user_db.find((user) => user.username === nameInputValue);

    if (userData) {
      if (userData.password !== passwordInputValue) {
        setErrorMsg({ name: "password", message: errors.password });
      } else {
        setIsSubmit(true);
        console.log(isSubmit)
      }
    } else {
        setErrorMsg({ name: "user_name", message: errors.user_name });
    }
    console.log(isSubmit,'lll')
  };

  const renderErrorMessage = (name) =>
  
    name === errorMsg.name && (
      <div className="error">{errorMsg.message}</div>
    );
   
  return (
      
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="user_name"  value={nameInputValue}   onChange={handleInputNameValue}/>
          
          {renderErrorMessage("user_name")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password"  value={passwordInputValue}   onChange={handleInputPasswordValue}/>
          {renderErrorMessage("password")}
        </div>
        <div className="button">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

}
export default memo(Login)