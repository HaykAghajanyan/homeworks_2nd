import React, { useEffect, useState } from "react"
import { colors, titles } from "../../helpers"
import { useDispatch, useSelector } from 'react-redux'
import { changeColor, changeTitle } from "../../redux/ducks/configsDuck"
import { configSelector } from "../../helpers/constSelector"

const Select = ({handleConfigs}) => { //

    const [color, setColor] = useState(colors[0])
    const [title, setTitle] = useState(titles[0].target)

    useEffect(()=>{
        handleConfigs({color, title})
    }, [handleConfigs, color, title])
     
    // const dispatch = useDispatch()

    // const {color, title } = useSelector(configSelector)

    // const handleChangeColor = e => {
    //     dispatch(changeColor(e.target.value))
    // } 

    // const handleChangeTitle = e => {
    //     dispatch(changeTitle(e.target.value)) 
    // }

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
                    id="selectColor" 
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
                    id="selectName"
                    onChange={handleChangeTitle}>
                        {
                            titles.map(item => (
                                <option key={item.target} value={item.target}>{item.option}</option>
                            ))
                        }  
                </select>     
            </div>
        </>
        
    )
}

export default Select;