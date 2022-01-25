import { useEffect, useRef } from "react";
import { useStore, useDispatch } from "react-redux";
import { actionSetMessage } from "../store/actions"
import { GetMessages } from "../api"
import KEY from "../constants/storageKey"

function useSave() {
	const store = useStore()
	const dispatch = useDispatch()
	const saveState = () => window.localStorage.setItem(KEY, JSON.stringify(store.getState()))
	const state = store.getState()
	const initRef = useRef(true)
	useEffect(() => {
		let needFetchData = true
		let storageData = window.localStorage.getItem(KEY)
		if (storageData) {
			storageData = JSON.parse(storageData)
			const msgChecking = "messages" in storageData && Array.isArray(storageData.messages)
			const schemChecking = "colorSchem" in storageData && typeof storageData.colorSchem === "object"
			if (msgChecking && schemChecking) {
				needFetchData = false
				dispatch(actionSetMessage(storageData))
			}
		}
		if (needFetchData) {
			dispatch(actionSetMessage(GetMessages()))
		}
		return saveState
	}, [])
	useEffect(() => {
		if (initRef.current) {
			initRef.current = false
			return
		}
		saveState()
	}, [state])
	return {};
}

export default useSave;
