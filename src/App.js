import { useState, useCallback, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import Header from "./components/Header"
import Footer from "./components/Footer"
import AuthSection from "./components/AuthSection"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		primary: {
			light: '#b9e9ff',
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
	const [isAuthSectionOpen, setIsAuthSectionOpen] = useState(false)
	const openAuthSection = useCallback(() => setIsAuthSectionOpen(true), [])
	const closeAuthSection = useCallback(() => setIsAuthSectionOpen(false), [])
	return (
		<ThemeProvider theme={darkTheme}>
			<Header openAuthSection={openAuthSection} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
			<AuthSection
				isAuthSectionOpen={isAuthSectionOpen}
				onClose={closeAuthSection}
			/>
		</ThemeProvider>
	)
}

export default App;