import React, {useCallback, useContext, useEffect, useState} from 'react';
import colors from './colors';
import './changecolor.css';
import {StoreContext} from "../../index";

const ChangeColor = () => {

    const [color, setColor] = useState('black')
    const [field, setField] = useState('text')

    const store = useContext(StoreContext)

    const changeColorHandler = useCallback((field, color = 'black') => {
        let changedColors = store.messages?.map((message) => {
            message[`${field}Color`] = color
            return message
        });
        store.messages = changedColors

    }, [color, field])

    useEffect(() => {
        changeColorHandler(field, color);
    }, [color, field])

    const onChangeColor = (event) => {
        event.target.style.color = event.target.value;
        setColor(event.target.value);
    }

    const onChangeField = (event) => {
        setField(event.target.value);
    }

    return (
        <div>
            <select onChange={onChangeColor}>
                {colors.map((color, index) => <option style={{ color: color }} key={index}>{color}</option>)}
            </select>

            <select onChange={onChangeField}>
                <option>text</option>
                <option>name</option>
            </select>
        </div>
    );
};
export default ChangeColor;
