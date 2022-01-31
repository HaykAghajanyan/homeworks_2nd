import { useCallback, useMemo, useState, useLayoutEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import useData from "../../hooks/useData";
import Select from "../../components/uiKits/Select"
import ColorPicker from "../../components/uiKits/ColorPicker";
import { changeName, changeText } from "../../store/messageActions"
import "./style.css"
const getState = state => state.message
function Settings(props) {
	const dispatch = useDispatch()
	const { messages, colorSchem } = useSelector(getState)
	const messageList = useMemo(() => messages.map(m => ({ value: m.id, desc: m.name + ": " + m.text })), [messages])
	const targetList = useMemo(() => [{ value: "nameColor", desc: "name" }, { value: "textColor", desc: "text" }], [])
	const [messageId, setMessageId] = useState("")
	const [target, setTarget] = useState("")
	const [color, setColor] = useState("#000")
	const onChangeMessage = useCallback(e => { setMessageId(parseInt(e.target.value)) }, [])
	const onChangeTarget = useCallback(e => { setTarget(e.target.value) }, [])
	const onChangeColor = useCallback(e => { setColor(e.target.value) }, [])
	const onClickCancel = useCallback(e => {
		setMessageId("")
		setTarget("")
		setColor("#000")
	}, [])
	const onClickAccept = useCallback(e => {
		if (!["nameColor", "textColor"].includes(target)) { return }
		let action = null
		if (target === "nameColor") {
			action = changeName({ id: messageId, color })
		}
		if (target === "textColor") {
			action = changeText({ id: messageId, color })
		}
		dispatch(action)
	}, [target, color])
	useLayoutEffect(() => {
		if (messageId in colorSchem) {
			setColor(prev => colorSchem[messageId][target] ? colorSchem[messageId][target] : prev)
		}
	}, [messageId, target])
	return (
		<div className="color_form">
			<div className="color_form__row">
				<Select
					label="Message"
					list={messageList}
					value={messageId}
					onChange={onChangeMessage}
				/>
				<Select
					label="Target"
					list={targetList}
					value={target}
					onChange={onChangeTarget}
				/>
				<ColorPicker value={color} onChange={onChangeColor} />
			</div>
			<div className="color_form__row">
				<Button variant="contained" onClick={onClickAccept}>Accept</Button>
				<Button variant="contained" onClick={onClickCancel}>Cancel</Button>
			</div>
		</div>
	)
}
export default Settings;