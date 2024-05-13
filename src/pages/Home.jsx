import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import logo from '../images/logo-main.png';
import logoBackImage from '../images/pexels-edwardeyer-ing-home-sm.jpg';
import ImageCarousel from '../components/ImageCarousel';
import OpeningHours from '../components/OpeningHours';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import ReviewsCarousel from '../components/ReviewsCarousel';
// import { Helmet } from 'react-helmet';

const Home = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		console.log('Home page');
	});

	const logoVariants = {
		hidden: { opacity: 0, scale: 0.5 },
		visible: { opacity: 1, scale: 1.3, transition: { duration: 1 } },
	};

	const logoBackgroundVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
	};

	const contentFadeInVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { delay: 1, duration: 2 } },
	};

	return (
		<>
			<motion.article className="relative overflow-hidden w-screen h-full bg-black my-12 md:m-auto">
				{/* <Helmet>
					<title>Rock Bar ING Kyoto - Home</title>
					<meta
						name="description"
						content="Welcome to Rock Bar ING, the best late-night bar in Kyoto, Japan, where rock music is life and the drinks keep flowing. Located on Kiyamachi Street, Kyoto city."
					/>
				</Helmet> */}

				<motion.img
					src={logo}
					ref={ref}
					alt="Main Logo"
					variants={logoVariants}
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					className="absolute inset-0 mx-auto w-8/12 md:max-w-3xl pt-6 md:pt-20 z-10"
				/>

				<motion.img
					src={logoBackImage}
					alt="Background"
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					variants={logoBackgroundVariants}
					className="w-full h-auto"
				/>
				<motion.div
					initial="hidden"
					animate={isInView ? 'visible' : 'hidden'}
					variants={contentFadeInVariants}
					className="relative mt-6 lg:mt-[-40px] xl:mt-[-60px] 2xl:mt-[-275px] 3xl:mt-[-550px] 4xl:mt-[-650px] 5xl:mt-[-875px] z-10"
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
			</motion.article>
		</>
	);
};

export default Home;
