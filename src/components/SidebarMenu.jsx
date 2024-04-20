import { useState } from "react";
import { motion } from "framer-motion";
import MenuToggle from "./MenuToogle";

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: "100%" },
};

const backdropVariants = {
  open: { opacity: 1, display: "block" },
  closed: { opacity: 0, transitionEnd: { display: "none" } },
};

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <MenuToggle toggle={toggleSidebar} isOpen={isOpen} />
      <motion.div
        className="fixed z-20 top-0 left-0 w-full h-full bg-black bg-opacity-70"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={backdropVariants}
        onClick={toggleSidebar} // Close sidebar when backdrop is clicked
      />
      <motion.nav
        className="fixed z-30 top-0 right-0 bottom-0 w-11/12 bg-black text-white border-l-2 border-slate-700  md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 175, damping: 20 }}
      >
        <ul className="flex flex-col text-2xl pl-12 py-20 font-robotoSlab">
          <li className="py-8 relative transition-all hover:text-red-500 active:text-red-700 hover:cursor-pointer">
            <span className="">ING BAR</span>
            {`  |  `}
            <span className="">イング居酒屋</span>
          </li>
          <li className="py-8 relative transition-all hover:text-red-500 active:text-red-700 hover:cursor-pointer">
            <span className="">MENU</span>
            {`  |  `}
            <span className="">メニュー</span>
          </li>
          <li className="py-8 relative transition-all hover:text-red-500 active:text-red-700 hover:cursor-pointer">
            <span className="">CONTACT</span>
            {`  |  `}
            <span className="">連絡</span>
          </li>
          <li className="py-8 relative transition-all hover:text-red-500 active:text-red-700 hover:cursor-pointer">
            <span className="">ACCESS</span>
            {`  |  `}
            <span className="">アクセス</span>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};

export default SidebarMenu;
