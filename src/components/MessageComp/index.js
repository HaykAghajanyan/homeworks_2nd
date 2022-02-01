import { useState } from "react";
//import MessageItem from "../MessageItemm";

function MessageComp ({onAdd, item:  {id, name, date, text, textColor, nameColor}}){
         const [value,setValue]=useState("")
         console.log(value)

     return (
  
    <>
        <p style={{color: nameColor}}>{name}</p>
        <p style={{color: textColor}}>{text}</p>
        <form 
          onSubmit={(e)=>{e.preventDefault();
        onAdd(value);

        }}
        >
            <button>Add</button>
             <input type="text" value={value}
              onChange={(e)=>{setValue(e.target.value)}}
              />
             <button>x</button>

        </form>
        
    </>
)
    }

export default MessageComp
