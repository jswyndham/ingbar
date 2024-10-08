import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="hidden md:flex w-full h-16 bg-black justify-center py-14 md:py-10 md:px-6 fixed top-0 left-0 z-50">
			<ul className="w-fit text-white text-sm sm:text-md md:text-lg lg:text-2xl font-robotoSlab flex flex-row justify-around md:justify-between items-center">
				<li className="w-25 md:w-50 li-hover relative border-white border-r-2 inline-block transition-all duration-500 hover:text-red-500 hover:cursor-pointer">
					<Link to="/" className="flex items-center">
						<span className="text-content">ING BAR</span>
						<span className="text-hover-content font-japaneseNoto">
							イング居酒屋
						</span>
					</Link>
				</li>

				<li className="li-hover relative border-white border-r-2 inline-block transition-all w-25 md:w-50 duration-500 hover:text-red-500 hover:cursor-pointer">
					<Link to="/menu" className="flex items-center">
						<span className="text-content">MENU</span>
						<span className="text-hover-content font-japaneseNoto">
							メニュー
						</span>
					</Link>
				</li>

				<li className="li-hover relative inline-block transition-all duration-500 w-25 md:w-50 hover:text-red-500 hover:cursor-pointer">
					<Link to="/access" className="flex items-center">
						<span className="text-content">ACCESS</span>
						<span className="text-hover-content font-japaneseNoto">
							アクセス
						</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
