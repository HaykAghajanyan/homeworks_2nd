import { forwardRef } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	footer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '1rem',
		background: 'linear-gradient(45deg,#fa8734 20%,#dd0239 40%,#319197 80%)',
		height: 60,
		marginTop: 'auto'
	},
	footer__content: {
		background: '#19386a',
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'white'
	}
})

const Footer = forwardRef((props, ref) => {
	const classes = useStyles()
	return (
		<div className={classes.footer} ref={ref}>
			<footer className={classes.footer__content}>
				<span>Classwork for ACA by Andranik Nazaryan</span>
			</footer>
		</div>
	);
})

export default Footer;
