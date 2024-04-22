import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from 'react-router-dom';
import './App.css';
import { Layout, Home, Menu, Access, Error } from './pages';

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
	return <RouterProvider router={router} />;
}

export default App;
