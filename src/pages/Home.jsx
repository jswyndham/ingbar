import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/white-logo-main.png';
import logoBackImage from '../images/pexels-edwardeyer-ing-home-sm.jpg';
import logoWhite from '../images/ing-logo-black-transparent-background.png';
import ImageCarousel from '../components/ImageCarousel';
import OpeningHours from '../components/OpeningHours';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import ReviewsCarousel from '../components/ReviewsCarousel';

const Home = () => {
	const [hideLogo, setHideLogo] = useState(false);
	const [backgroundBlack, setBackgroundBlack] = useState(false); // Controls if background should transition

	useEffect(() => {
		const isFirstLoad = !sessionStorage.getItem('hasLoaded');
		console.log('isFirstLoaded', isFirstLoad);
		sessionStorage.setItem('hasLoaded', 'true'); // Set 'hasLoaded' immediately

		const navigationEntries = performance.getEntriesByType('navigation');
		const navigationType =
			navigationEntries.length > 0
				? navigationEntries[0].type
				: 'navigate';

		if (isFirstLoad || navigationType === 'reload') {
			const hideTimer = setTimeout(() => {
				setHideLogo(true);
			}, 2000);
			const backgroundTimer = setTimeout(() => {
				setBackgroundBlack(true);
			}, 2250);

			return () => {
				clearTimeout(hideTimer);
				clearTimeout(backgroundTimer);
			};
		} else {
			setHideLogo(true);
			setBackgroundBlack(true);
		}
	}, []);

	// useEffect(() => {
	// 	const hideTimer = setTimeout(() => {
	// 		setHideLogo(true);
	// 	}, 2000); // Hide the intro logo after 2 seconds
	// 	const backgroundTimer = setTimeout(() => {
	// 		setBackgroundBlack(true); // Start background transition after 3 seconds
	// 	}, 2250);
	// 	return () => {
	// 		clearTimeout(hideTimer);
	// 		clearTimeout(backgroundTimer);
	// 	};
	// }, []);

	const introLogoVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
		exit: {
			opacity: 0,
			y: -200,
			scale: 0.5,
			transition: { duration: 1.5, ease: 'easeInOut' },
		},
	};

	const mainLogoVariants = {
		hidden: { opacity: 0, y: 100, scale: 1.5 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.5 },
		},
	};

	const backgroundVariants = {
		white: { backgroundColor: '#FFFFFF' },
		black: {
			backgroundColor: '#000000',
			transition: { duration: 1.5, ease: 'easeInOut' },
		},
	};

	const contentFadeInVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { delay: 1.5, duration: 1 }, // Coordinates with background transition
		},
	};

	return (
		<motion.article
			initial="white"
			animate={backgroundBlack ? 'black' : 'white'}
			variants={backgroundVariants}
			className="relative w-full h-full"
		>
			<AnimatePresence>
				{!hideLogo && (
					<motion.div
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={introLogoVariants}
						className="fixed inset-0 flex flex-col items-center justify-center z-50"
					>
						<h1 className="text-black font-gochiHand text-xl md:text-3xl lg:text-5xl mb-10 md:mb-14 text-center">
							Kyoto's <span className="text-red-500">#1</span>{' '}
							late night bar
						</h1>
						<motion.img
							src={logoWhite}
							alt="Intro Logo"
							initial="hidden"
							animate="visible"
							exit="exit" // Ensure this matches a key in the `introLogoVariants`
							variants={introLogoVariants}
							className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl lg:-mb-12"
						/>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{hideLogo && (
					<motion.div className="relative overflow-hidden w-screen my-12 md:m-auto">
						<motion.img
							src={logoBackImage}
							alt="Background"
							initial="hidden"
							animate="visible"
							variants={contentFadeInVariants}
							className="w-full h-auto"
						/>

						<motion.img
							src={logo}
							alt="Main Logo"
							initial="hidden"
							animate="visible"
							variants={mainLogoVariants}
							className="absolute inset-0 mx-auto w-2xl md:max-w-3xl lg:max-w-4xl 3xl:max-w-5xl pb-2"
						/>
					</motion.div>
				)}
			</AnimatePresence>

			{hideLogo && (
				<motion.div
					initial="hidden"
					animate="visible"
					variants={contentFadeInVariants}
					className="relative md:mt-4 lg:mt-[-50px] xl:mt-[-200px] 2xl:mt-[-400px] 3xl:mt-[-500px] 4xl:mt-[-630px] 5xl:mt-[-850px]"
				>
					<div className="mb-20 lg:mb-24">
						<ImageCarousel />
					</div>
					<div className="flex flex-col md:flex-row-reverse justify-center xl:justify-between items-center max-w-7xl mx-auto">
						<div className="xl:w-2/5 md:mx-2 xl:mr-12 mx-1 my-2 flex justify-center border border-slate-700">
							<OpeningHours />
						</div>
						<div className="w-full xl:w-3/5 md:mx-2 py-2 xl:pr-24 mx-1">
							<AboutUs />
						</div>
					</div>
					<div className="mx-2 lg:mt-24 mb-32">
						<ReviewsCarousel />
					</div>
					<Footer />
				</motion.div>
			)}
		</motion.article>
	);
};

export default Home;
