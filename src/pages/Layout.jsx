import { useEffect, createContext, useMemo, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import SidebarMenu from '../components/SidebarMenu';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from '../components/ScrollToTop';

const LayoutContext = createContext();

function Layout() {
	// ************** useState
	const [showSidebar, setShowSidebar] = useState(false);

	// ********* useRef
	const sidebarRef = useRef();

	// ****** Detect click outside the sidebar and close
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
				setShowSidebar(false);
			}
		};

		// Attach the listener
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			// Remove the listener on cleanup
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [showSidebar]);

	// ********** Handlers
	const handleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	const value = useMemo(
		() => ({
			showSidebar,
			handleSidebar,
		}),
		[showSidebar]
	);

	// helmetContext variable being passed as a prop
	const helmetContext = {};

	return (
		<HelmetProvider context={helmetContext}>
			<LayoutContext.Provider value={value}>
				<Navbar />
				<SidebarMenu />
				<section className="z-0 w-screen h-full bg-black text-white overflow-hidden">
					<ScrollToTop />
					<Outlet />
				</section>
			</LayoutContext.Provider>
		</HelmetProvider>
	);
}

export default Layout;
