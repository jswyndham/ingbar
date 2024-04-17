import { useEffect, useState } from 'react';
import logo from '../images/ING-Logo-blackBG-whiteTEXT.png';
import ImageCarousel from '../components/ImageCarousel';
import OpeningHours from '../components/OpeningHours';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

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
					style={{ width: '80%', maxHeight: '80vh' }}
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
			<div className="flex flex-col md:flex-row-reverse justify-center items-center max-w-6xl mx-auto">
				<div className="md:w-1/2 md:mx-2 mx-1 my-2 flex justify-center border border-slate-700 shadow-lg shadow-slate-400">
					<OpeningHours />
				</div>
				<div className="w-full md:w-1/2 md:mx-2 my-2 mx-1">
					<AboutUs />
				</div>
			</div>
			<div className="w-screen flex justify-center">
				<div className="w-full lg:max-w-4xl h-fit p-8 my-10 bg-gray-900 rounded-lg">
					<div className="flex flex-col w-fit">
						<h2 className="font-gochiHand text-4xl lg:text-5xl">
							"Man is not a camel!"
						</h2>
						<p className="font-robotoSlab text-xl text-red-600 lg:text-2xl text-end pr-6">
							- Hako
						</p>
					</div>
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</article>
	);
};

export default Home;
