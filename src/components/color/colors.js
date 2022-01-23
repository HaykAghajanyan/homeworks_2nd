import {useState} from 'react';
import {colors} from "../../helpers/constants";
import './colors.css'

const {
    RED,
    GREEN,
    YELLOW,
    BLUE,
    PURPLE,
    ORANGE,
    BLACK
} = colors

function Colors({handlerSelection}) {
    const [colorSelection,setColorSelection] = useState('');
    const [itemSelection,setItemSelection] = useState('');

    function handleSelectColor(event) {
        setColorSelection(event.target.value);
    }

    function handleSelectItem(event) {
        setItemSelection(event.target.value);
    }

    return (
        <>
            <h4>Choose color of text or name</h4>

            <select className='color' onChange={handleSelectColor}>
                <option value="">Choose color</option>
                <option value={RED}>RED</option>
                <option value={GREEN}>GREEN</option>
                <option value={YELLOW}>YELLOW</option>
                <option value={BLUE}>BLUE</option>
                <option value={PURPLE}>PURPLE</option>
                <option value={ORANGE}>ORANGE</option>
                <option value={BLACK}>BLACK</option>
            </select>

            <select onChange={handleSelectItem}>
                <option value="">Choose one item</option>
                <option value="name">name</option>
                <option value="text">text</option>
            </select>
            <br/>
            <button className='btn' onClick={() => handlerSelection(colorSelection, itemSelection)}>Submit</button>

        </>
    );
}

export default Colors;