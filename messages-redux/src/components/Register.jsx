import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addUser} from '../redux/ducks/userDuck';
import {useForm} from 'react-hook-form'

function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const defaultInputValues = {username: '', email: '', password: ''}
  const { register, handleSubmit, formState: {errors, isSubmitSuccessful} } = useForm({defaultValues: defaultInputValues});

  const onSubmit = data => {
    dispatch( addUser(data) );
    setTimeout(() =>{ navigate("/login", { replace: true }) }, 1000);
  }

  
  const [formMessage, setformMessage] = useState('');
  
  useEffect(() => {
    if( isSubmitSuccessful ){
        setformMessage('Thank you for your registration...');
    }
  }, [isSubmitSuccessful]);



  return (
    <form onSubmit={ handleSubmit( onSubmit ) }>
      <div style={{fontWeight:'bold', textAlign: 'center'}}>{formMessage}</div>
      <div className="form-group">
        <input type="text" {...register("username", {required: "This field is required.", maxLength: 100})} placeholder="Username" className={'form-control ' + (errors.username ? 'is-invalid' : '')}/>
        <div className="invalid-feedback">{errors.username?.message}</div>
      </div>
      <div className="form-group">
        <input type="text" {...register("email", {required: "This field is required.", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please enter a valid email address"}})} placeholder="Email" className={'form-control ' + (errors.email ? 'is-invalid' : '')}/>
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <div className="form-group">
        <input type="password" {...register("password", {required: "This field is required.", min: {value:3, message: 'Password minimum length must be at least 3 characters'} })} placeholder="Password" className={'form-control ' + (errors.password ? 'is-invalid' : '')}/>
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <div className="form-group form-bottom">
        <input type="submit" name="Register" value="Register" className="btn btn-primary"/>
      </div>
    </form>
  );
}

export default Register;
