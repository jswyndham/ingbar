import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/white-logo-main.png';
import logoBackImage from '../images/pexels-edwardeyer-ing-home-sm.jpg';
import ImageCarousel from '../components/ImageCarousel';
import OpeningHours from '../components/OpeningHours';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import ReviewsCarousel from '../components/ReviewsCarousel';

const Home = () => {
	const [animationPhase, setAnimationPhase] = useState('showLogo');

	useEffect(() => {
		const timeoutIds = [
			setTimeout(() => {
				setAnimationPhase('transition'); // Start fading logo out and fading background in
			}, 2000),
			setTimeout(() => {
				setAnimationPhase('showContent'); // Fully display the content
			}, 3000),
		];
		return () => timeoutIds.forEach(clearTimeout);
	}, []);

	const logoVariants = {
		hidden: { opacity: 0 }, // Ensure this state is defined if used
		show: { opacity: 1, y: 0, scale: 1.5, transition: { duration: 1 } },
		hide: { opacity: 0, y: -200, scale: 1, transition: { duration: 1.75 } },
	};

	const backgroundVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 2 } },
	};

	const contentFadeInVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 2 } },
	};

	return (
		<motion.article
			className="relative overflow-hidden w-screen h-full bg-black my-12 md:m-auto"
			onViewportEnter={() => console.log('Entered viewport!')}
			onViewportLeave={() => console.log('Left viewport!')}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
		>
			<AnimatePresence>
				{animationPhase !== 'showContent' && (
					<motion.img
						src={logo}
						alt="Main Logo"
						initial="show"
						whileInView="visible"
						viewport={{ once: true }}
						animate={
							animationPhase === 'showLogo' ? 'show' : 'hide'
						}
						variants={logoVariants}
						className="flex inset-0 m-auto py-40 md:py-60 w-4xl md:w-7/12 xl:w-7/12 3xl:w-5/12"
					/>
				)}
			</AnimatePresence>

			{animationPhase === 'showContent' && (
				<>
					<motion.img
						src={logoBackImage}
						alt="Background"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						animate="visible"
						variants={backgroundVariants}
						className="w-full h-auto"
					/>
					<motion.img
						src={logo}
						alt="Main Logo"
						initial="hidden"
						animate={
							animationPhase === 'showContent' ? 'show' : 'hide'
						}
						variants={logoVariants}
						className="absolute inset-0 mx-auto w-8/12 md:max-w-3xl pt-6 md:pt-20"
					/>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						animate="visible"
						variants={contentFadeInVariants}
						className="relative mt-6 lg:mt-[-40px] xl:mt-[-60px] 2xl:mt-[-275px] 3xl:mt-[-550px] 4xl:mt-[-650px] 5xl:mt-[-875px]"
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
				</>
			)}
		</motion.article>
	);
};

export default Home;
