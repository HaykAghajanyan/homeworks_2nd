import React, { useState } from "react";
import styles from './messages.module.css';

const colors = {
    Brown: 'brown',
    Aqua: 'aqua',
    Lime: 'lime',
    Gold: 'gold',
    Green: 'green',
    Red: 'red',
    Black: 'black',
    Blue: 'blue',
}

function Select({hendleColor}){
    const [color, setColor] = useState("black");
    return(
        <div className={styles.select}>
            <div>
                <p>Color name</p>
                    <select onChange={(e) => setColor(e.target.value)}>
                        <option  defaultValue= ""  hidden>Colors</option>
                        {Object.keys(colors).map((item, index) => {
                            return(
                                <option key={index} value={colors[item]} style={{color: colors[item]}}>{item}</option>
                            )
                        })}
                    </select>
            </div>
            <div>
                <p>Color text</p>
                <select onChange={(e) => hendleColor(color, e.target.value)}>
                        <option defaultValue= ""  hidden>Name or text</option>
                        <option value="Name">Name</option>
                        <option value="Text">Text</option>
                </select>
            </div>
        </div>
    )
}

export default Select;