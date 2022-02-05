import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


 const Settings = ({setColor,setUser,color,user}) => {

     const history = useNavigate()
     
     const change = (e) => {
      setUser(e.target.value)
         console.log(e.target.value)
     }
     const chengeColor =(e) =>{
     setColor(e.target.value)
     console.log(color);
     }
     
     
  return <div>
      <select name="color" value ={color}onChange={chengeColor}>
    <option value = "red" >red</option>
    <option value = "green">green</option>
    <option value = "pink">pink </option>


      </select>
      
      
    <select name='art'   value={user}  onChange={change}>
     <option value = "name">Name</option>
    <option value = "text" >Text </option>
    </select>

      <button onClick={() => history("/",{ state: {color:color,user: user} })}>
          Back
      </button>
  </div>;
};

export default Settings
