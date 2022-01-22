import React, { useEffect, useState } from 'react';
import colors from './colors';
import './changemessage.css';

const ChangeMessage = ({ changeColorHandler }) => {
    const [color, setColor] = useState('black');
    const [field, setField] = useState('text');
    const onChangeColor = (event) => {
        event.target.style.color = event.target.value;
        setColor(event.target.value);
    };
    const onChangeField = (event) => {
        setField(event.target.value);
    };
    useEffect(() => {
        changeColorHandler(field, color);
    }, [color, field]);
    return (<div>
            <select onChange={onChangeColor}>
                {colors.map((color, index) => <option style={{ color: color }} key={index}>{color}</option>)}
            </select>

            <select onChange={onChangeField}>
                <option>text</option>
                <option>name</option>
            </select>
        </div>);
};
export default ChangeMessage;
