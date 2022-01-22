import React from "react"

function User ({id, name, date, text, textColor, nameColor}) {
    return (
        <div className="userCard">
            <div className="userData"> 
                <span> {nameColor} </span>
                <span> {textColor} </span>
                <span> {id} </span>
                <span> {name} </span>
                <span> {date}</span>
             </div><br/>

            <div> 
                {text} 
            </div> 
        </div>
    )
}


export default User;