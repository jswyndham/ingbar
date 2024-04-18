import { useEffect, useState } from 'react';
import logo from '../images/ING-Logo-blackBG-whiteTEXT.png';
import ImageCarousel from '../components/ImageCarousel';
import OpeningHours from '../components/OpeningHours';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import ReviewsCarousel from '../components/ReviewsCarousel';

const Home = () => {
	// ***** user State for logo ********
	const [hideLogo, setHideLogo] = useState(false);

	useEffect(() => {
		// Automatically hide the logo after 3 seconds
		const timer = setTimeout(() => {
			setHideLogo(true);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<article className="bg-black">
			<div
				className={`fullscreen-logo flex flex-col ${
					hideLogo ? 'hidden-logo' : ''
				}`}
			>
				<h1 className="font-gochiHand text-2xl lg:text-5xl mb-20 text-white text-center">
					Kyoto's <span className="text-red-600">#1</span> late night
					bar!
				</h1>

				<img
					src={logo}
					alt="Black and white ING logo"
					style={{ width: '75%', maxHeight: '80vh' }}
					onClick={() => setHideLogo(true)} // Optionally hide logo on click
				/>
			</div>

			<div className="flex justify-center py-6">
				<img
					src={logo}
					alt="Black and white ING logo"
					className="flex w-3xl lg:max-w-4xl h-3xl lg:max-h-4xl"
				/>
			</div>
			<div className="mb-10">
				<ImageCarousel />
			</div>

			{/* Bottom half */}
			<div className="flex flex-col md:flex-row-reverse justify-center items-center max-w-7xl mx-auto">
				<div className="xl:w-2/5 md:mx-2 mx-1 my-2 flex justify-center border border-slate-700 ">
					<OpeningHours />
				</div>
				<div className="w-full xl:w-3/5 md:mx-2 my-2 mx-1">
					<AboutUs />
				</div>
			</div>
			<div className="my-12">
				<div className="w-fit h-2 border-t-4 bg-red-500 border-red-500 py-6"></div>
				<ReviewsCarousel />
			</div>

			{/* Footer */}
			<Footer />
		</article>
	);
};

export default Home;
