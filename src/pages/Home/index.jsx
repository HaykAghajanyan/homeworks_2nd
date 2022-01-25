import { List, ListItem, ListItemText } from "@mui/material";
// import useData from "../../hooks/useData";
import { useSelector } from "react-redux"
import "./style.css"
const getState = state => state
function Home(props) {
	const state = useSelector(getState)
	console.log(state);
	return (
		<List className="message_list">
			{
				(Array.isArray(state.messages))
				&&
				state.messages.map(msg => {
					const { textColor, nameColor } = state.colorSchem[msg.id] ?? {}
					return (
						<ListItem className="message_list__item" key={msg.id}>
							<ListItemText
								primary={msg.name}
								secondary={msg.text}
								primaryTypographyProps={{
									className: "message_list__title",
									color: nameColor ? nameColor : msg.nameColor,
									'data-date': msg.date
								}}
								secondaryTypographyProps={{
									className: "message_list__text",
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