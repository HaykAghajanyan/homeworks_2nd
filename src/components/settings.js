import {useState} from "react";

export default function Settings({colors, selectHandler}) {
    const [selectedColor, setSelectedColor] = useState("Green");
    const [selectedAttr, setSelectedAttr] = useState("Name");


    return <div>

        <select onChange={(e) => setSelectedColor(e.target.value)}>
            <option> {colors.GREEN}</option>
            <option> {colors.BLUE}</option>
            <option> {colors.RED}</option>
        </select>

        <select onChange={(e) => setSelectedAttr(e.target.value)}>
            <option> Name</option>
            <option> Text</option>
        </select>
        <button onClick={() => selectHandler(selectedColor, selectedAttr)}> Change color</button>

    </div>;
}