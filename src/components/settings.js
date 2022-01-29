import {colors, target as types, target} from "../helpers/constants";
import {useDispatch} from "react-redux/lib/hooks/useDispatch";
import {changeColor, changeNameClass, changeTarget, changeTextClass} from "../Redux/Ducks/appDuck/appDuck";
import {useSelector} from "react-redux/lib/exports";


export default function Settings({}) {

    const dispatch = useDispatch();

    const [targetValue, color] = useSelector(({AppDuck}) => [AppDuck.target, AppDuck.color]);

    const selectHandler = (color, target) => {
        switch (target) {
            case types.NAME:
                dispatch(changeNameClass(color));
                break;
            case types.TEXT:
                dispatch(changeTextClass(color));
                break;
            default:
                console.log("default");


        }
    };


    return (
        <div>
            <select onChange={(e) => dispatch(changeColor(e.target.value))}>
                <option> {colors.GREEN}</option>
                <option> {colors.BLUE}</option>
                <option> {colors.RED}</option>
            </select>

            <select onChange={(e) => {
                dispatch(changeTarget(e.target.value));
            }}
            >
                <option> {target.NAME}</option>
                <option> {target.TEXT}</option>
            </select>

            <button onClick={() => selectHandler(color, targetValue)}> Change color</button>

        </div>);
}