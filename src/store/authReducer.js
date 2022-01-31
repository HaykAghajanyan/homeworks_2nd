import { AddUser, LoginUser, LogoutUser } from "../constants/ReduxActionTypes"
const defaultState = { users: [], online: null, error: null };
function authReducer(state = defaultState, { type = null, payload = null }) {
	switch (type) {
		case AddUser:
			return { ...state, users: state.users.concat(payload), online: payload, error: null };
		case LoginUser:
			const existUser = state.users.find(u => u.email === payload.email)
			if (!existUser || existUser.password !== payload.password) {
				return { ...state, error: "Invalid user data" }
			}
			return { ...state, online: existUser, error: null };
		case LogoutUser:
			return { ...state, online: null, error: null };
		default: return state;
	}
};

export default authReducer;