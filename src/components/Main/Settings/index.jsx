import React, {useCallback, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import MessagesDuck,{ changeColorR, changeTarget, changeMessagesData } from "../../../redux/ducks/messagesDuck";

import style from "./style.module.css"
const messageExample = {
        "id": "1",
        "name": "Name",
        "date": "00/00/0000",
        "text": "Text",
        "textColor": "#FFFFFF",
        "nameColor": "#FFFFFF"
      };




const Settings = () => {
    const dispatch =  useDispatch()
    
    const {color, target ,messages} = useSelector((state)=> state.MessagesDuck)
    
    const handleChange = useCallback((event) => {
        const { value } = event.target
        dispatch(changeTarget(value === "text" ? 1 : 0))
    })
    const handleChangecolor = useCallback((event) => {
        const { value } = event.target
        dispatch(changeColorR(value));
    })
    const changeColor = (e)=>{
        e.preventDefault();
        const changs = messages.map((el)=>{
            if(target){
                el.textColor = color
                return el
            }
            el.nameColor = color
            return el
        })
        dispatch(changeMessagesData(changs))
    }
   
    return (
            <>
            <section>
                <h1>Color Change Switches</h1>
                <div >
                    ----{color}
                    <div className={`${style.switch} ${style['switch--horizontal']}`}>
                    <input id="radio-a" type="radio" value='text' name="first-switch" defaultChecked = {target} onChange={handleChange}/>
                    <label htmlFor="radio-a">Text</label>
                    <input id="radio-b" type="radio"value='name' name="first-switch" defaultChecked = {!target} onChange={handleChange}/>
                    <label htmlFor="radio-b">Name</label><span className={style["toggle-outside"]}><span className={style['toggle-inside']}></span></span>
                    </div>
                </div>
            </section>
            <section className={style.colorBox}>    
                    <input type="color" value={color}  onChange={handleChangecolor}/>
                    <button onClick={changeColor} className={style.saveBtn} type="submit">Save</button>
            </section>

            </>
    )
}
export default Settings
