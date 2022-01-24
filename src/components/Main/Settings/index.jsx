import React, {useState} from "react";
import style from "./style.module.css"
const messageExample = {
        "id": "1",
        "name": "Name",
        "date": "00/00/0000",
        "text": "Text",
        "textColor": "#FFFFFF",
        "nameColor": "#FFFFFF"
      };




const Settings = ({messages,setMessages}) => {
  
    const [ activeItem, setActiveItem ] = useState(1);
    const [ activeColor, setActiveColor ] = useState('#000000');

    const handleChange = (event) => {
        const { value } = event.target
        setActiveItem(value === "text" ? 1 : 0);
    }
    const handleChangecolor = (event) => {
        const { value } = event.target
        setActiveColor(value);
    }
    const changeColor = (e)=>{
        e.preventDefault();
        const changs = messages.map((el)=>{
            if(activeItem){
                el.textColor = activeColor
                return el
            }
            el.nameColor = activeColor
            return el
        })
        setMessages(changs)
    }
   
    return (
            <>
            <section>
                <h1>Color Change Switches</h1>
                <div >
                    ----{activeColor}
                    <div className={`${style.switch} ${style['switch--horizontal']}`}>
                    <input id="radio-a" type="radio" value='text' name="first-switch" defaultChecked  onChange={handleChange}/>
                    <label htmlFor="radio-a">Text</label>
                    <input id="radio-b" type="radio"value='name' name="first-switch" onChange={handleChange}/>
                    <label htmlFor="radio-b">Name</label><span className={style["toggle-outside"]}><span className={style['toggle-inside']}></span></span>
                    </div>
                </div>
            </section>
            <section className={style.colorBox}>    
                    <input type="color"  onChange={handleChangecolor}/>
                    <button onClick={changeColor} className={style.saveBtn} type="submit">Save</button>
            </section>

            </>
    )
}
export default Settings
