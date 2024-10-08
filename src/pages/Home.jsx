import { lazy, Suspense, useMemo, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import logo from '/images/logo-main.png';
import logoBackImage from '/images/backgroundImages/pexels-edwardeyer-ing-home-sm.jpg';
import HomeJSONLD from '../components/seo/HomeJSONLD';
import Loading from '../components/Loading'; // Import the Loading component

// Lazy-loaded components
const ImageCarousel = lazy(() =>
	import('../components/homePage/ImageCarousel')
);
const OpeningHours = lazy(() => import('../components/homePage/OpeningHours'));
const AboutUs = lazy(() => import('../components/homePage/AboutUs'));
const Footer = lazy(() => import('../components/Footer'));
const ReviewsCarousel = lazy(() =>
	import('../components/homePage/ReviewsCarousel')
);

const Home = () => {
	const ref = useRef(null);
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		setAnimationTriggered(true);
	}, []);

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

	const openingHours = useMemo(
		() => [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: [
					'Monday',
					'Tuesday',
					'Wednesday',
					'Thursday',
					'Friday',
					'Saturday',
					'Sunday',
				],
				opens: '19:00',
				closes: '05:00',
			},
		],
		[]
	);

	return (
		<>
			<motion.article className="relative overflow-hidden w-screen h-full bg-black my-12 md:m-auto">
				{/* Serverside SEO using react-helmet-async */}
				<Helmet>
					<title>
						Rock Bar ING Kyoto - Best Rock Music and Nightlife in
						Kyoto
					</title>

					{/* Metadata description */}
					<meta
						name="description"
						content="Experience the best of Kyoto nightlife at Rock Bar ING. Enjoy rock music, expertly crafted drinks, and a vibrant atmosphere on Kiyamachi Street."
					/>

					{/* Canonical tag */}
					<link rel="canonical" href="https://www.kyotoingbar.com/" />

					{/* Social Media tags */}
					<meta property="og:type" content="website" />
					<meta
						property="og:title"
						content="Rock Bar ING Kyoto - Best Rock Music and Nightlife in Kyoto"
					/>
					<meta
						property="og:description"
						content="Experience the best of Kyoto nightlife at Rock Bar ING. Enjoy live rock music, expertly crafted drinks, and a vibrant atmosphere on Kiyamachi Street."
					/>
					{/* Twitter tags */}
					<meta
						property="og:url"
						content="https://www.kyotoingbar.com/"
					/>
					<meta
						property="og:image"
						content="./images/ing-white-logo-black-background.jpg"
					/>
					<meta name="twitter:card" content="summary_large_image" />
					<meta
						name="twitter:title"
						content="Rock Bar ING Kyoto - Experience Exciting Nightlife and Live Music"
					/>
					<meta
						name="twitter:description"
						content="Dive into Kyoto's rock scene with live music and great drinks at Rock Bar ING. Located in the heart of Kyoto's nightlife district on Kiyamachi Street."
					/>
				</Helmet>

				{/* Json-Ld data for extra SEO structure */}
				<HomeJSONLD
					name="Rock Bar ING Kyoto"
					address={{
						streetAddress:
							'Royalbuilding 2F Nishikiyamachi Takoyakushi Nakagyouku',
						imagePath: '../images/logo-main.png',
					}}
					telephone="075-255-5087"
					url="https://www.kyotoingbar.com/"
					openingHours={openingHours}
				/>

				{/* ING logo */}
				<motion.img
					src={logo}
					ref={ref}
					alt="Main Logo"
					variants={logoVariants}
					initial="hidden"
					animate={animationTriggered ? 'visible' : 'hidden'}
					className="absolute inset-0 mx-auto w-8/12 md:max-w-3xl pt-6 md:pt-20 z-10"
				/>

				<motion.img
					src={logoBackImage}
					alt="Background"
					initial="hidden"
					animate={animationTriggered ? 'visible' : 'hidden'}
					variants={logoBackgroundVariants}
					className="w-full h-auto"
					loading="lazy"
				/>

				<Suspense fallback={<Loading />}>
					<motion.div
						initial="hidden"
						animate={animationTriggered ? 'visible' : 'hidden'}
						variants={contentFadeInVariants}
						className="relative mt-6 lg:mt-[-40px] xl:mt-[-60px] 2xl:mt-[-275px] 3xl:mt-[-550px] 4xl:mt-[-650px] 5xl:mt-[-875px] z-10"
					>
						<div className="mb-20 lg:mb-24">
							<ImageCarousel />
						</div>
						<div className="flex flex-col smd:flex-row-reverse justify-center xl:justify-between items-center max-w-7xl mx-auto">
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
				</Suspense>
			</motion.article>
		</>
	);
};

export default Home;
