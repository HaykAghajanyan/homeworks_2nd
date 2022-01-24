import { SetMessages, changeTextColorOfMessage, changeNameColorOfMessage } from "../constants/ReduxActionTypes"
const defaultState = { messages: [], colorSchem: {} };
const defaultAction = { type: null, payload: null };
function colorReducer(state = defaultState, action = defaultAction) {
	switch (action.type) {
		case SetMessages: return { messages: action.payload, colorSchem: {} };
		case changeTextColorOfMessage: return state;
		case changeNameColorOfMessage: return state
		default: return state;
	}
};

export default colorReducer;