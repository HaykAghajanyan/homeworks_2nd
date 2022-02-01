import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";
import style from "./style.module.css"

const Messages = ({messages})=>{
    const [mess,setMess] = useState([])
    useEffect(()=>{
             setMess(messages)
            // setTimeout(()=>setMess(messages),200)
        },[messages])
    return(
        <div className={style.messBox}>
        { mess.length > 0 ?
        mess.map((el)=>{
            const messagePath = el?.info.slice(-1)[0].message
            if(messagePath){
                return (<NavLink to={`${el.id}`} key={el.id} className={style.linkToMessage}>
                <div className={style.message} >
                    <div className={style.avatar} style={{'gridArea': 'a'}}></div>
                    <div className={style.userName} style={{color:messagePath.nameColor,'gridArea': 'b'}}>{messagePath.name}</div>
                    <div className={style.text} style={{color:messagePath.textColor,'gridArea': 'c'}}>{messagePath.text}</div>
                    <div className={style.date} style={{'gridArea': 'd'}}>{messagePath.date}</div>
                </div>
                </NavLink>)
            }
        }
        
        ):<span>Your message box is empty</span>}
        </div>
    )
}

export default Messages