import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Login } from "@mui/icons-material";
import Link from './uiKits/Link';
import { makeStyles } from "@mui/styles";
import { forwardRef } from "react";

const useStyles = makeStyles({
	header: {
		background: 'linear-gradient(45deg,#fa8734 20%,#dd0239 40%,#319197 80%)',
		paddingBottom: '1rem'
	}
})


const Header = forwardRef(({ openAuthSection }, ref) => {
	const classes = useStyles()
	return (
		<div className={classes.header}>
			<AppBar position="static" color="primary" ref={ref}>
				<Toolbar>
					<Typography color="primary.light" variant="h6" noWrap component="div">
						<Link to="/" withoutActive={true} >Message Designer</Link>
					</Typography>
					<Typography
						noWrap
						component="div"
						sx={{
							flexGrow: 1,
							marginLeft: '2rem',
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center'
						}}
					>
						<Link to="/profile">Profile</Link>
						<Link to="/settings">Settings</Link>
					</Typography>
					<IconButton
						color="inherit"
						onClick={openAuthSection}
					>
						<Typography
							component="span"
							sx={{ mr: 1 }}
						>
							Auth
						</Typography>
						<Login />
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
})

export default Header;