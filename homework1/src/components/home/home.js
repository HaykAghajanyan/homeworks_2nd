import { useEffect, useState } from "react";
import React from 'react';

function Home({color,attr}) {
    const [message, setMessage] = useState([])
    console.log(message)
    useEffect(() => {
        fetch("../json/messages.json").then((res) => res.json()).then((res) => setMessage(res.messages));
        console.log(message)
    }, [])
useEffect((color,attr)=>{
if(attr=='Name'){
    message.name.style={color:color}
}else if(attr=='Text'){
    message.text.style={color:color}
    }

},[color,attr])
    return (
        <div>
            {message.map((item, id) => {
                return (<div className='card'key={id}>
                    {attr=='Name'? 
                    <>
                    <span style={{color:color}}>{item.name}</span>
                    <span>{item.text}</span>
                    <span>{item.date}</span>
                    </>:
                    attr=='Text'?
                    <>
                    <span>{item.name}</span>
                    <span style={{color:color}}>{item.text}</span>
                    <span>{item.date}</span>
                    </>:
                    <><span>{item.name}</span>
                    <span>{item.text}</span>
                    <span>{item.date}</span>
                    </>}
                    </div>)
                    
            })}
                </div>
                )
                
        }
            

        
   

export default Home;