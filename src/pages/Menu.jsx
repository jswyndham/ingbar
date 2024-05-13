import logo from '../images/logo-ing-only-white.png';
import backgroundImg from '../images/ing-records.jpg';
import BarSnacksList from '../components/menu/BarSnacksList';
import BeerList from '../components/menu/BeerList';
import WineList from '../components/menu/WineList';
import BarMealsList from '../components/menu/BarMeals';
import JapaneseAlcoholList from '../components/menu/JapaneseAlcoholList';
import NonAlcoholicList from '../components/menu/NonAlcoholicList';
import WhiskeyList from '../components/menu/WhiskeyList';
import { useEffect, useRef } from 'react';
import ShotsList from '../components/menu/ShotsList';
import GinVodkaBasedDrinksList from '../components/menu/GinVodkaDrinksList';
import LiqueurList from '../components/menu/LiqueurList';
import { AnimatePresence, motion, useInView } from 'framer-motion';
// import { Helmet } from "react-helmet";

function Menu() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	useEffect(() => {
		console.log('Menu page');
	});

	const logoVariant = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.5 } },
	};

	const menuList = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
	};

	return (
		<motion.article
			style={{
				backgroundImage: `url(${backgroundImg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
			transition={{
				type: 'spring',
				stiffness: 150,
				damping: 40,
			}}
			className="relative w-screen h-screen overflow-hidden"
		>
			<motion.div
				layout
				transition={{
					type: 'spring',
					stiffness: 150,
					damping: 40,
				}}
				className="absolute -top-8 lg:top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-60 z-40 flex flex-col justify-center items-center"
			>
				{/* <Helmet>
          <title>Rock Bar ING Kyoto - Menu</title>
          <meta
            name="description"
            content="Welcome to Rock Bar ING, the best late-night bar in Kyoto, Japan, where rock music is life and the drinks keep flowing. Located on Kiyamachi Street, Kyoto city."
          />
        </Helmet> */}

				<motion.div className="mt-32 flex justify-center w-full">
					<motion.div
						variants={logoVariant}
						initial="hidden"
						ref={ref}
						animate={isInView ? 'visible' : 'hidden'}
						className="h-fit w-10/12 md:w-9/12 lg:w-7/12 2xl:w-5/12 p-12 mt-28 mb-16 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-row justify-center rounded-lg shadow-xl shadow-slate-900"
					>
						<img
							src={logo}
							alt="ing logo"
							className="h-14 md:h-20"
						/>
						<h2 className="font-serif text-5xl md:text-7xl px-4 mt-1">
							Menu
						</h2>
					</motion.div>
				</motion.div>

				<AnimatePresence>
					<div className="w-full h-full">
						<motion.div
							layout
							variants={menuList}
							initial="hidden"
							animate={isInView ? 'visible' : 'hidden'}
							transition={{
								ease: 'linear',
								layout: { type: 'spring' },
							}}
							className="w-full h-auto flex flex-col items-center px-5"
						>
							<BarMealsList />

							<BarSnacksList />

							<BeerList />

							<WineList />

							<JapaneseAlcoholList />

							<WhiskeyList />

							<GinVodkaBasedDrinksList />

							<ShotsList />

							<LiqueurList />

							<NonAlcoholicList />
						</motion.div>
					</div>
				</AnimatePresence>
			</motion.div>
		</motion.article>
	);
}

export default Menu;
