import React, {useState} from "react"

function Select () {
    
  
    return (
        <>
            <div className="selectClass">
                Colors:
                <select className="as"  onChange={() => {}}>
                    <option value="red">Red</option>
                    <option value="purple">Purple</option>
                    <option value="green">Green</option>
                    <option value="pink">Pink</option>
                    <option value="blue">Blue</option>
                </select>
                Select:  
            <select className="as" onChange={() => {}}>
                    <option value="text">Text</option>
                    <option value="name">Name</option> 
                </select>   
                <button > Change </button>
            </div>
        </>
        
    )
}

export default Select;
