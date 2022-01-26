import React from 'react';
import {useForm} from 'react-hook-form'

function Register() {

  const { register, handleSubmit, formState, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  console.log(formState);
  
  return (
    <form onSubmit={ handleSubmit( onSubmit ) }>
      <div className="form-group">
        <input type="text" {...register("username", {required: true, maxLength: 100})} placeholder="Username" className="form-control"/>
      </div>
      <div className="form-group">
        <input type="text" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} placeholder="Email" className="form-control"/>
      </div>
      <div className="form-group">
        <input type="password" {...register("password", {required: true, min: 3})} placeholder="Password" className="form-control"/>
      </div>
      <div className="form-group form-bottom">
        <input type="submit" name="Register" value="Register" className="btn btn-primary"/>
      </div>
    </form>
  );
}

export default Register;
