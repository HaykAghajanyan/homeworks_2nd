import React from "react";

const Selectors = ({ colorChange , textNameChange }) => {

    const colorSelect = () => {
        let select = document.getElementById("colorSelectId")
        let value = select.options[select.selectedIndex].value;
        colorChange(value)
    }

    const textName = () => {
        let select = document.getElementById("textNameSelectId")
        let value = select.options[select.selectedIndex].value;
        textNameChange(value)
    }

    return (
        <div className='select-page'>
            <select className="color-select" id="colorSelectId" onChange={() => colorSelect()}>
                <option value="none" selected disabled hidden>Color</option>
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
            </select>
            <select className="text-name" id="textNameSelectId" onChange={() => textName()}>
                <option value="none" selected disabled hidden>Select</option>
                <option value="text">Text</option>
                <option value="name">Name</option>
            </select>
        </div>
    );
}

export default Selectors;