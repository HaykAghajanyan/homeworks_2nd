import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { GetMessages } from "../api"
import { actionSetMessage } from "../store/actions"
const getState = state => state
function useData() {
	const dispatcher = useDispatch()
	const state = useSelector(getState)
	useEffect(() => {
		if (!Array.isArray(state.messages) || state.messages.length === 0) {
			dispatcher(actionSetMessage(GetMessages()))
		}
	}, [state.messages])
	return state;
}

export default useData;
