import MuiLink from '@mui/material/Link';
import { NavLink } from "react-router-dom"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	link: {
		margin: '2px 5px',
		textDecoration: 'none',
		fontSize: '1rem'
	}
})

function Link({ to, children }) {
	const classes = useStyles()
	let activeStyle = {
		color: '#fff',
		fontWeight: 'bold',
		textDecoration: 'underline',
		fontSize: '1.15rem'
	};
	return (
		<MuiLink
			className={classes.link}
			color="primary.light"
			component={NavLink} to={to}
			style={({ isActive }) =>
				isActive ? activeStyle : undefined
			}
		>
			{children}
		</MuiLink>
	);
}

export default Link;
