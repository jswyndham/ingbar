import { useEffect, createContext, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import SidebarMenu from "../components/SidebarMenu";
import { Outlet } from "react-router-dom";

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
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
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

  return (
    <LayoutContext.Provider value={value}>
      <Navbar />
      <SidebarMenu />
      <section className="z-0 w-screen h-full bg-black text-white overflow-hidden">
        <Outlet />
      </section>
    </LayoutContext.Provider>
  );
}

export default Layout;
