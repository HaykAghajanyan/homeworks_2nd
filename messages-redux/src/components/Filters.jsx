import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeColor, changeTarget} from "../redux/ducks/messageDuck";

function Filters() {

    const dispatch = useDispatch();
    const {color, target} = useSelector(state => state.messageDuck);

    return (
        <React.Fragment>
            <div className='filters'>
                <select value={color} onChange={ e =>  dispatch( changeColor(e.target.value) )  }>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>
                <select value={target} onChange={ e => dispatch( changeTarget(e.target.value) ) }>
                    <option value="textColor">Text Color</option>
                    <option value="nameColor">Name Color</option>
                </select>
            </div>
        </React.Fragment>
    )
}

export default Filters
