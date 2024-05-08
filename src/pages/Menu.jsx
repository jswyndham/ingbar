import logo from '../images/ing-large-white-transparent.png';
import backgroundImg from '../images/ing-records.jpg';
import BarSnacksList from '../components/menu/BarSnacksList';
import BeerList from '../components/menu/BeerList';
import SpiritsList from '../components/menu/SpiritsList';
import WineList from '../components/menu/WineList';
import BarMealsList from '../components/menu/BarMeals';
import JapaneseAlcoholList from '../components/menu/JapaneseAlcoholList';
import NonAlcoholicList from '../components/menu/NonAlcoholicList';
import WhiskeyList from '../components/menu/WhiskeyList';
import { Helmet } from 'react-helmet';

function Menu() {
	return (
		<article
			style={{
				backgroundImage: `url(${backgroundImg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
			className="relative w-screen h-screen overflow-hidden"
		>
			<div className="absolute -top-8 lg:top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-60 z-40 flex flex-col justify-center items-center">
				<Helmet>
					<title>Rock Bar ING Kyoto - Menu</title>
					<meta
						name="description"
						content="Welcome to Rock Bar ING, the best late-night bar in Kyoto, Japan, where rock music is life and the drinks keep flowing. Located on Kiyamachi Street, Kyoto city."
					/>
				</Helmet>

				<div className="flex justify-center w-full">
					<div className="h-fit w-10/12 md:w-9/12 lg:w-7/12 2xl:w-5/12 p-12 mt-28 mb-16 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-row justify-center rounded-lg shadow-xl shadow-slate-900">
						<img
							src={logo}
							alt="ing logo"
							className="h-14 md:h-20"
						/>
						<h2 className="font-serif text-5xl md:text-7xl px-4 mt-1">
							Menu
						</h2>
					</div>
				</div>

				<div className="w-full h-full flex flex-col items-center px-5">
					<BarMealsList />

					<BarSnacksList />

					<BeerList />

					<WineList />

					<JapaneseAlcoholList />

					<WhiskeyList />

					{/* <SpiritsList /> */}

					<NonAlcoholicList />
				</div>
			</div>
		</article>
	);
}

export default Menu;
