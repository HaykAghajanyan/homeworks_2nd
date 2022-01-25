import React from "react";
import style from "./style.module.css"
const Messages = ({messages})=>{
    return(
        <div className={style.messBox}>
        { messages ?
        messages.map(el=>
        <div className={style.message} key={el.id}>
            <div className={style.avatar} style={{'gridArea': 'a'}}></div>
            <div className={style.userName} style={{color:el.nameColor,'gridArea': 'b'}}>{el.name}</div>
            <div className={style.text} style={{color:el.textColor,'gridArea': 'c'}}>{el.text}</div>
            <div className={style.date} style={{'gridArea': 'd'}}>{el.date}</div>
        </div>
        ):<span>Your message box is empty</span>}
        </div>
    )
}

export default Messages