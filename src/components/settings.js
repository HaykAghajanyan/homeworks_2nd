import {useState} from "react";
import {colors, target} from "../helpers/constants";

export default function Settings({selectHandler}) {
    const [selectedColor, setSelectedColor] = useState(colors.GREEN);
    const [selectedAttr, setSelectedAttr] = useState(target.NAME);


    return <div>

        <select onChange={(e) => setSelectedColor(e.target.value)}>
            <option> {colors.GREEN}</option>
            <option> {colors.BLUE}</option>
            <option> {colors.RED}</option>
        </select>

        <select onChange={(e) => setSelectedAttr(e.target.value)}>
            <option> {target.NAME}</option>
            <option> {target.TEXT}</option>
        </select>
        <button onClick={() => selectHandler(selectedColor, selectedAttr)}> Change color</button>

    </div>;
}