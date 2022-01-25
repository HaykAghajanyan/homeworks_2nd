import React, { useState } from "react";
import { useStore } from "../../store/Store";

const Settings = () => {
    const store = useStore()
    const [color, setColor] = useState('black')

    const changeHandler = e => {
        store.setMessages({...store, messages: store.messages.map(item => item[e.target.value] = color) })
    }


    return (
        <div>
            <select onChange={(e) => setColor(e.target.value)}>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
            <select onChange={changeHandler}>
                <option>choose</option>
                <option value="textColor">Text Color</option>
                <option value="nameColor">Name Color</option>
            </select>
        </div>
    )
}

export default Settings;
