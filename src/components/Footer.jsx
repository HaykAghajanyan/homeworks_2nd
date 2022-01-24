import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	footer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '2.25rem',
		borderTop: '1px solid grey'
	}
})

function Footer() {
	const classes = useStyles()
	return (
		<div className={classes.footer}>
			Classwork for ACA by Andranik Nazaryan
		</div>
	);
}

export default Footer;
