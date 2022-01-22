import { useEffect, useState } from "react"
const Home=({colors},{text})=>{
 
    const [users, setUsers] = useState()

   

    useEffect(()=> {
       fetch("../../db.json")
       .then(res => res.json())
       .then(res => setUsers(res))

       
    },)
    
   
    return(
    <div>
           {users?.messages.map(item=>
            <div key={item.id} className="item" >
              
               <h3> Date:{item.date}</h3>
               <h3 style={{ color:colors}}> {text}Name:{item.name}</h3>
               <h3 style={{color:colors}}>Text:{item.text}</h3>
             </div>)}
    </div>)
    
}
export default Home