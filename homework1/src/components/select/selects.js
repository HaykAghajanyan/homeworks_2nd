
import Colors from '../../helpers/constants/constants';


function Select({ color, setColor, attr, setAttr }) {

    const changeColor = e => {
        setColor(e.target.value)
    }
    const changeAttr = e => {
        setAttr(e.target.value)
    }

    return (
        <div>

            <select value={color} onChange={changeColor}>
                {Colors.map(color => (<option key={color} value={color}>{color}</option>))}
            </select>
            <select value={attr} onChange={changeAttr}>
                <option>Text</option>
                <option >Name</option>
            </select>

        </div>
        /* <select onChange={(evt) => { setColor(evt.target.value) }}>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
        </select>
        <select onChange={(evt) => { setAttr(evt.target.value) }}>
            
        </select>}*/

    );
}
export default Select;