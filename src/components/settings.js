
function Settings (props) {
    function handleChangeColor(e) {
        props.changeColor(e.target.value);
    }
    function handleChangeElem(e) {
        props.changeElem(e.target.value);
    }
    return (
        <div className='Settings'>
            <div className='clicksel'>
                <select onClick={handleChangeElem}>
                    <option value = 'name'>name</option>
                    <option value = 'text'>text</option>
                </select>
                <select onClick={handleChangeColor}>
                    <option value = 'black'>black</option>
                    <option value = 'green'>green</option>
                    <option value = 'red'>red</option>
                    <option value = 'pink'>pink</option>
                    <option value = 'blue'>blue</option>
                </select>
            </div>
        </div>
    );
}


export default Settings;