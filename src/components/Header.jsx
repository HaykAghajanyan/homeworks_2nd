import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Link from './uiKits/Link';


function Header() {
	return (
		<AppBar position="static" color="primary">
			<Toolbar sx={null}>
				{/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
					<MenuIcon />
				</IconButton> */}
				<Typography variant="h6" noWrap component="div">
					Message Designer
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
					<Link to="/">Home</Link>
					<Link to="/settings">Settings</Link>
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;