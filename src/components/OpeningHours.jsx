const OpeningHours = () => {
	return (
		<div className="relative my-4 overflow-hidden max-w-4xl mx-auto">
			{/* Background Image with overlay */}
			<img
				src="./src/images/ing-beer.jpg"
				alt="Background"
				className="w-full h-auto"
			/>
			<div className="absolute inset-0 bg-black opacity-60"></div>

			{/* Content Container using Flexbox */}
			<div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
				{/* Opening Hours */}
				<div className="text-center">
					<h2 className="text-white underline underline-offset-8 decoration-2 decoration-red-500 text-2xl md:text-3xl lg:text-4xl font-bold font-robotoSlab">
						Opening Hours
					</h2>
					<div className="mt-4 md:mt-6 text-lg md:text-xl">
						<p className="font-shadows py-2 lg:py-3">
							Open 7 days a week
						</p>
						<p className="font-shadows py-2 lg:py-3">
							Opening Times: 7pm - 5am
						</p>
						<p className="font-sans py-2 md:py-4">
							ING is a late-night establishment that caters to all
							people who love Kyoto after dark.
						</p>
					</div>
				</div>

				{/* Drinks at ING */}
				<div className="text-center pb-8 lg:pb-12">
					<h2 className="text-white underline underline-offset-8 decoration-2 decoration-red-500 text-2xl md:text-3xl lg:text-4xl font-bold font-robotoSlab">
						Drinks at ING
					</h2>
					<div className="mt-4 md:mt-6 text-lg md:text-xl text-left px-4 md:px-8">
						<p className="font-shadows py-2 lg:py-2">Beer ¥670</p>
						<p className="font-shadows py-2 lg:py-4">
							Cocktails ¥650
						</p>
						<p className="font-bold underline underline-offset-4 pt-4">
							English menu available
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OpeningHours;
