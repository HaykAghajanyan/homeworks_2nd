import { SetMessages, changeTextColorOfMessage, changeNameColorOfMessage } from "../constants/ReduxActionTypes"
const defaultState = null;
const defaultAction = { type: null, payload: null };
function colorReducer(state = defaultState, action = defaultAction) {
	switch (action.type) {
		case SetMessages:
			return { ...action.payload };
		case changeTextColorOfMessage:
			const colorSchemStateForText = { ...state.colorSchem }
			if (action.payload.id in colorSchemStateForText) {
				colorSchemStateForText[action.payload.id].textColor = action.payload.color
			} else {
				colorSchemStateForText[action.payload.id] = { nameColor: '#000', textColor: action.payload.color }
			}
			return { ...state, colorSchem: colorSchemStateForText };
		case changeNameColorOfMessage:
			const colorSchemStateForName = { ...state.colorSchem }
			if (action.payload.id in colorSchemStateForName) {
				colorSchemStateForName[action.payload.id].nameColor = action.payload.color
			} else {
				colorSchemStateForName[action.payload.id] = { textColor: '#000', nameColor: action.payload.color }
			}
			return { ...state, colorSchem: colorSchemStateForName };
		default: return state;
	}
};

export default colorReducer;