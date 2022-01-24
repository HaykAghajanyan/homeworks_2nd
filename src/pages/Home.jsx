import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { List, ListItem, ListItemText } from "@mui/material"
import { GetMessages } from "../api"
import { actionSetMessage } from "../store/actions"
const getState = state => state
function Home(props) {
	const dispatcher = useDispatch()
	const state = useSelector(getState)
	console.log(state);
	useEffect(() => {
		dispatcher(actionSetMessage(GetMessages()))
	}, [])
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{
				(Array.isArray(state.messages))
				&&
				state.messages.map(msg => {
					const [textColor, nameColor] = state.colorSchem[msg.id] ?? []
					return (
						<ListItem key={msg.id} alignItems="flex-start">
							<ListItemText
								primary={msg.name}
								secondary={msg.text}
								primaryTypographyProps={{
									color: nameColor ? nameColor : msg.nameColor
								}}
								secondaryTypographyProps={{
									color: textColor ? textColor : msg.textColor
								}}
							/>
						</ListItem>
					)
				})
			}
		</List>
	);
}
export default Home;