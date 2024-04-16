import React from 'react';

const Navbar = () => {
	return (
		<nav className="w-screen h-16 bg-black flex justify-center py-6 md:px-6">
			<ul className="w-fit text-white text-sm sm:text-md md:text-lg lg:text-2xl font-robotoSlab flex flex-row justify-around md:justify-between items-center">
				<li className="w-25 md:w-50 li-hover relative border-white border-r-2 inline-block transition-all duration-500 hover:text-red-600 hover:cursor-pointer">
					<span className="text-content">ING BAR</span>
					<span className="text-hover-content">イング居酒屋</span>
				</li>
				<li className="li-hover relative border-white border-r-2 inline-block transition-all w-25 md:w-50 duration-500 hover:text-red-600 hover:cursor-pointer">
					<span className="text-content ">MENU</span>
					<span className="text-hover-content ">メニュー</span>
				</li>
				<li className="li-hover relative border-white border-r-2 inline-block transition-all w-25 md:w-50 duration-500 hover:text-red-600 hover:cursor-pointer">
					<span className="text-content ">CONTACT</span>
					<span className="text-hover-content ">連絡</span>
				</li>
				<li className="li-hover relative inline-block transition-all duration-500 w-25 md:w-50 hover:text-red-600 hover:cursor-pointer">
					<span className="text-content ">ACCESS</span>
					<span className="text-hover-content ">アクセス</span>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
