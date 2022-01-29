import { List, ListItem, ListItemText } from "@mui/material";
import useData from "../../hooks/useData";
import "./style.css"
function Home(props) {
	const state = useData()
	return (
		<List className="message_list">
			{
				(state !== null && Array.isArray(state.messages))
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