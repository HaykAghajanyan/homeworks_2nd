import './color-changer.css';
import {useState} from "react";

export default function ColorChanger({selectedColor, setColorValue, selectedProperty, setPropertyValue}) {
    const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
    const properties = ["Text", "Name"]

    return (
        <div>
            <h2>Select color and property to change </h2>
            <div className='selects'>
                <div className='select'>
                    <label htmlFor="colorOptions">Choose a color : </label>
                    <select value={selectedColor}
                            onChange={(e) => {
                                setColorValue(e.target.value)
                            }}
                            name="colorOptions" id="colorOptions">
                        <option selected={true} value=''>--Select Color--</option>
                        {colors.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </div>
                <div className='select'>
                    <label htmlFor="propertyOptions">Choose a property : </label>
                    <select disabled={!selectedColor} value={selectedProperty}
                            onChange={(e) => {
                                setPropertyValue(e.target.value)
                            }}
                            name="propertyOptions" id="propertyOptions">
                        <option selected={true} value=''>--Select Property--</option>
                        {properties.map(item => <option key={item} value={item}>{item}</option>)}
                    </select>
                </div>
            </div>
        </div>
    );
}
