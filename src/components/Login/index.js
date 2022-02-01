import { useState } from "react"
 

function Login(){
    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [submite,setSubmite]=useState("");
    const [error, setError]=useState("")
    
    function handlePassword(evt){
        setPassword(evt.target.value);
        setSubmite(false)

    }
    function handleName(event){
      setName(event.target.value);
      setSubmite(false)
    }

    function handleSubmit(evt){
       evt.preventDefault();
       if(name==="" || password===""){
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

        

        <div className="login">

      <div>
        <h1>User Login</h1>
      </div>
 
      <div className="errorMessages">
        {errorMessage()}
      </div>




          <form>
              <input value={name} onChange={handleName} placeholder="name" className="log_inp" type="text"/>
              <br/>
              <input value={password} onChange={handlePassword} placeholder="password" className="log_inp" type="password"/>
              <br/>

              <button onClick={handleSubmit} type="Submit">Login</button>


          </form>
        </div>
    )
}

export default Login