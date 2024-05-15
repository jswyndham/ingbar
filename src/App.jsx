import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from 'react-router-dom';
import './App.css';
import { Layout, Home, Menu, Access, Error } from './pages';
import { useEffect } from 'react';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				index: true,
				element: <Home />,
			},
			{
				path: '/menu',
				element: <Menu />,
			},
			{
				path: '/access',
				element: <Access />,
			},
		],
	},
]);

function App() {
	useEffect(() => {
		const darkModeIcon = './ing-white-logo-transparent.png';
		const lightModeIcon = './ing-black-logo-transparent.png';

		const setFavicon = (icon) => {
			const favicon = document.getElementById('favicon');
			if (favicon) {
				favicon.href = icon;
			}
		};

		const handleColorSchemeChange = (e) => {
			setFavicon(e.matches ? darkModeIcon : lightModeIcon);
		};

		const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
		setFavicon(matchMedia.matches ? darkModeIcon : lightModeIcon);
		matchMedia.addEventListener('change', handleColorSchemeChange);

		return () => {
			matchMedia.removeEventListener('change', handleColorSchemeChange);
		};
	}, []);

	return <RouterProvider router={router} />;
}

export default App;
