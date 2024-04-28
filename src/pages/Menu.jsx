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
			<div className="absolute top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-60 z-40 flex flex-col">
				<div className="pt-28 pb-16 lg:py-16 flex flex-row justify-center">
					<img src={logo} alt="ing logo" className="h-20 mx-4" />
					<h2 className="font-serif text-7xl px-4 mt-1">Menu</h2>
				</div>

				<BarMealsList />

				<BarSnacksList />

				<BeerList />

				<WineList />

				<JapaneseAlcoholList />

				<WhiskeyList />

				{/* <SpiritsList /> */}

				<NonAlcoholicList />
			</div>
		</article>
	);
}

export default Menu;
