import {colors, colorTarget} from "../../helpers/constants";
import {createAction} from "../../helpers/reduxSelctors";

const CHANGE_COLOR = 'configsDuck/CHANGE_COLOR'
const CHANGE_TARGET = 'configsDuck/CHANGE_TARGET'

export const changeColor = (payload) => ({
    type: CHANGE_COLOR,
    payload
})

export const changeColor2 = createAction(CHANGE_COLOR)

export const changeTarget = (payload) => ({
    type: CHANGE_TARGET,
    payload
})

export const fetchMessages = (payload) => (dispatch) => {
    // dispatch(toggleLoader(true))

    fetch('url')
        .then(res => res.json())
        .then(res => dispatch(changeColor('black')))
        .finally(() => {
            // dispatch(toggleLoader(false))
        })
}

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
