import {colors, colorTarget} from "../../helpers/constants";
import {createAction} from "../../helpers/redux";

const CHANGE_COLOR = 'configsDuck/CHANGE_COLOR'
const CHANGE_TARGET = 'configsDuck/CHANGE_TARGET'

export const changeColor = createAction(CHANGE_COLOR)
export const changeTarget = createAction(CHANGE_TARGET)


const initialState = {
    color: colors[0],
    target: colorTarget[0].target
}

const ConfigsDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case CHANGE_COLOR:
            return {
                ...state,
                color: payload
            }
        case CHANGE_TARGET:
            return {
                ...state,
                target: payload
            }
        default: return state
    }
}

export default ConfigsDuck
