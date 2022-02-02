import React, { useEffect, useState } from "react"
import { colors, titles } from "../../helpers"

const Select = ({handleConfigs}) => {

    const [color, setColor] = useState(colors[0])
    const [title, setTitle] = useState(titles[0].target)

    useEffect(()=>{
        handleConfigs({color, title})
    }, [handleConfigs, color, title])
    
    const handleChangeColor = e => {
        setColor(e.target.value)
    }
    const handleChangeTitle = e => {
        setTitle(e.target.value)
    }

    return (
        <>
            <div className="selectClass">
                Colors:
                <select 
                    value={color} 
                    className="as"  
                    onChange={handleChangeColor}>
                        {
                            colors.map(color => (
                                <option key={color} value={color}>{color}</option>
                            ))
                        }  
                </select>
                Title:  
                <select 
                    value={title} 
                    className="as" 
                    id="as"
                    onChange={handleChangeTitle}>
                        {
                            titles.map(item => (
                                <option key={item.option} value={item.target}>{item.option}</option>
                            ))
                        }  
                </select>     
            </div>
        </>
        
    )
}

export default Select;