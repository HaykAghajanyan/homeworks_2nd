import React, {useState} from 'react';

function Selects ({color, setColor, field, setField}) {

    let handleColor = (e) => {
        setColor (e.target.value);   
    }

    let handleField = (e) => {
        setField (e.target.value);
    }
    console.log (color)
    console.log (field)
    return (
        <div>
            <label>
                Select the color: 
                <select onChange = {handleColor} style={{marginLeft: "1%", color: "green", padding: "0.5%"}}>
                    <option value={color}>{color}</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                    <option value="red">red</option>
                    <option value="white">white</option>
                </select>
            </label>

            <label onChange = {handleField} style={{marginLeft: "1%"}}>
                Select the field: 
                <select style={{marginLeft: "1%", color: "green", padding: "0.5%"}}>
                    <option value={field}>{field}</option>
                    <option value="name">name</option>
                    <option value="text">text</option>
                </select>
            </label>

        </div>

    )
    
}    
    
export default Selects;