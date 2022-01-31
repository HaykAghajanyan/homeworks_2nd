import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { GetMessages } from "../api"
import { actionSetMessage } from "../store/messageActions"
const getState = state => state.message
function useData() {
	const dispatcher = useDispatch()
	const state = useSelector(getState)
	useEffect(() => {
		if (state === null) {
			dispatcher(actionSetMessage(GetMessages()))
		}
	}, [state])
	return state;
}

export default useData;
