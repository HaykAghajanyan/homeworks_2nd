import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
	palette: {
		primary: {
			light: '#03a9f4',
			main: '#19386a',
			dark: '#051e32',
		},
		secondary: {
			light: 'tomato',
			main: '#FF1717',
			dark: '#c62828',
		},
		secondary: {
			light: '#29ff34',
			main: '#4caf50',
			dark: '#035007',
		}
	},
});
function App(props) {
	console.log(process.env);
	return (
		<ThemeProvider theme={darkTheme}>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</ThemeProvider>
	)
}

export default App;