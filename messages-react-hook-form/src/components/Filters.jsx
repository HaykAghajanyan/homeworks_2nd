import React, {useEffect, useRef} from 'react';

function Filters({messages, setColor, setElem, color, elem}) {

    const colorRef = useRef();
    const elemRef = useRef();

    useEffect(() => {
        colorRef.current.value = color;
        elemRef.current.value = elem;
    }, [messages, color, elem]);

    return (
        <React.Fragment>
            <div className='filters'>
                <select ref={colorRef} onChange={ e => setColor(e.target.value) }>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                </select>
                <select ref={elemRef} onChange={ e => setElem(e.target.value) }>
                    <option value="textColor">Text Color</option>
                    <option value="nameColor">Name Color</option>
                </select>
            </div>
        </React.Fragment>
    )
}

export default Filters
