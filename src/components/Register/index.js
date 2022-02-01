import { useState } from "react"

function Register(){
    const [name,setName]=useState("");
    const [surname,setSurname]=useState("");
    const [age, setAge]=useState("");
    const [password, setPassword]=useState("");
    const [submite,setSubmite]=useState("");
    const [error, setError]=useState("");


   

  function handleName(evt){
    setName(evt.target.value);
      setSubmite(false)

    }


    function handleSurname(evt){
        setSurname(evt.target.value);
        setSubmite(false)

   }
   
    
    function handleAge(evt){
        setAge(evt.target.value);
        setSubmite(false)

    }
    function handlePassword(evt){
        setPassword(evt.target.value)
        setSubmite(false)

    }

    function handleSubmit(evt){
        evt.preventDefault();
        if(name==="" ||surname==="" ||age==="" || password===""){
            setError(true)
        }
        else{
            setSubmite(true);
            setError(false);
        }
     }


    

    function errorMessage(){
      return(
          <div className="error" style={{
            display: error ? '' : 'none',
          }}>
              <h1>Please enter all the fields</h1>
          </div>
      )
    }

    return(
    <div className="register">
      <div>
        <h1>User Registration</h1>
      </div>
 
      <div className="errorMessages">
        {errorMessage()}
      </div>
      
    
        
          <form>
              
              <input value={name} placeholder="Name" type="text" onChange={handleName}/>
              <br/>
              <input value={surname} placeholder="Surname" type="text" onChange={handleSurname}/>
              <br/>
              <input value={age} placeholder="Age" type="number" onChange={handleAge}/>
              <br/>
            
              <input value={password} placeholder="Password" type="password" onChange={handlePassword}/>
              <br/>

              <button onClick={handleSubmit}>Register</button>


          </form>
        </div>
    )
}

export default Register