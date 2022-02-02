import React from "react"

const User = ({item: { name, date, text, textColor, nameColor}}) => {
    return (
        <div className="userCard">
            <div className="userData"> 
                <span style = {{color: nameColor}}> {name} </span>
                <span > {date}</span>
             </div><br/>

            <div style = {{color: textColor}}> 
             {text} 
            </div> 
        </div>
    )
}


export default User;