import MuiLink from '@mui/material/Link';
import { NavLink } from "react-router-dom"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	link: {
		margin: '2px 5px !important',
		textDecoration: 'none !important',
		fontSize: '1rem !important',
		'&.active:hover': {
			cursor: 'default !important'
		},
		'&:hover:not(.active)': {
			textDecoration: 'underline !important',
		}
	},
	linkWithoutActive: {
		margin: '2px 5px !important',
		textDecoration: 'none !important',
		fontSize: '1.5rem !important',
		color: '#9cc !important',
		'&:hover': {
			cursor: 'pointer !important',
			color: 'white !important'
		}
	}
})

function Link({ to, children, withoutActive = false }) {
	const classes = useStyles()
	let activeStyle = {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: '1.15rem'
	};
	return (
		<MuiLink
			className={withoutActive ? classes.linkWithoutActive : classes.link}
			color="primary.light"
			component={NavLink} to={to}
			style={({ isActive }) =>
				!withoutActive && isActive ? activeStyle : undefined
			}
		>
			{children}
		</MuiLink>
	);
}

export default Link;
