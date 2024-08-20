import { Link } from 'react-router-dom';
import backgroundImage from '/images/backgroundImages/ing-beer.jpg';
const OpeningHours = () => {
	return (
		<article className="relative overflow-hidden max-w-4xl my-12 md:m-auto">
			{/* Background Image with overlay */}
			<img
				src={backgroundImage}
				alt="Background"
				className="w-full h-auto"
				loading="lazy"
			/>
			<div className="absolute inset-0 bg-black opacity-50"></div>

			{/* Content Container using Flexbox */}
			<div className="absolute inset-0 flex flex-col justify-between p-4 sm:py-44 md:p-8">
				{/* Opening Hours */}
				<div className="text-center -mt-6 smx:mt-8 md:mt-16 smd:mt-0">
					<h2 className="text-white underline underline-offset-8 decoration-2 decoration-red-500 text-3xl smx:text-5xl smd:text-3xl xl:text-4xl font-bold font-robotoSlab">
						Opening Hours
					</h2>
					<div className="pt-8 smx:pt-16 smd:pt-6 text-xl smx:text-3xl smd:text-xl xl:text-2xl">
						<p className="font-shadows py-1 smd:py-3">
							Open 7 days a week
						</p>
						<p className="pb-2 lg:pb-3">年中無休</p>
						<p className="font-shadows pt-3">
							Opening Times: 7pm - 5am
						</p>
						<p className="pb-2 lg:py-3">営業時間: 19:00～5:00</p>
						<p className="font-sans p-6 sm:px-12 md:p-16 smd:p-8 text-lg smx:text-2xl smd:text-lg lg:text-xl smx:py-10  font-bold">
							ING is a late-night establishment that caters to all
							people who love Kyoto after dark.
						</p>
					</div>
				</div>

				{/* Drinks at ING */}
				<div className="text-center pb-8 md:pb-56 lg:pb-8">
					<h2 className="text-white underline underline-offset-8 decoration-2 decoration-red-500 text-3xl smx:text-5xl smd:text-3xl xl:text-4xl font-bold font-robotoSlab">
						Drinks at ING
					</h2>
					<div className="pt-8 lg:pt-6 text-xl smx:text-3xl smd:text-xl xl:text-2xl text-left px-4 sm:px-24 md:px-8">
						<p className="font-shadows py-2 lg:py-2">Beer ¥670</p>
						<p className="font-shadows py-2 lg:py-4">
							Cocktails ¥650
						</p>
						<Link
							to="/menu"
							className="font-bold underline underline-offset-4 mt-6 text-yellow-400"
						>
							English menu available
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
};

export default OpeningHours;
