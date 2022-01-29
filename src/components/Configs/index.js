import {colors, colorTarget} from "../../helpers/constants";
import {useDispatch, useSelector} from "react-redux";
import {changeColor, changeTarget} from "../../redux/ducks/configsDuck";

const configSelector = ({ConfigsDuck}) => ConfigsDuck

const Configs = ({handleConfigs}) => {
    // const [color, setColor] = useState(colors[0])
    // const [target, setTarget] = useState(colorTarget[0].target)
    //
    // useEffect(() => {
    //     handleConfigs({color, target})
    // },[color, target])

    const dispatch = useDispatch()

    const {color, target} = useSelector(configSelector)

    const handleColorChange = e => {
        // setColor(e.target.value)
        dispatch(changeColor(e.target.value))
    }

    const handleTargetChange = e => {
        // setTarget(e.target.value)
        dispatch(changeTarget(e.target.value))
    }

    return (
        <>
            <select
                value={color}
                onChange={handleColorChange}
                name="selectColor"
                id="selectColor"
            >
                {
                    colors.map(color => (
                        <option key={color} value={color}>{color}</option>
                    ))
                }
            </select>
            <select
                value={target}
                onChange={handleTargetChange}
                name="selectTarget"
                id="selectTarget"
            >
                {
                    colorTarget.map(item => (
                        <option key={item.target} value={item.target}>{item.option}</option>
                    ))
                }
            </select>
        </>
    )
}

export default Configs
