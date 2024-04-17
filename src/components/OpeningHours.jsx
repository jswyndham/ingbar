const OpeningHours = () => {
	return (
		<div className="relative my-4 overflow-hidden max-w-4xl text-center">
			{/* Background Image */}
			<img
				src="./src/images/ing-beer.jpg"
				alt="Background"
				className="w-full"
			/>
			{/* The dark forefront for image*/}
			<div className="absolute inset-0 bg-black opacity-60"></div>

			{/* Opening Hours */}
			<div className="absolute lg:w-fit lg:-top-8 -top-4 p-10 md:p-20">
				<h2 className="absolute lg:left-44 left-32 text-white underline underline-offset-8 decoration-2 decoration-red-500 transform -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-5xl font-bold  font-gochiHand">
					Opening Hours
				</h2>
				<div className="mt-8 md:mt-14 text-xl md:text-2xl">
					<p className="font-shadows py-2 lg:py-4">
						Open 7 days a week
					</p>
					<p className="font-shadows py-2 lg:py-4">
						Opening Times: 7pm - 5am
					</p>
					<p className="font-sans py-2 md:pt-6">
						ING is a late-night establishment that caters to all
						people who love Kyoto after dark.
					</p>
				</div>
			</div>

			{/* Drinks at ING */}
			<div className="absolute w-full bottom-10 lg:bottom-32">
				<h2 className="absolute lg:left-44 left-32 text-white underline underline-offset-8 decoration-2 decoration-red-500 transform -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-5xl font-bold  font-gochiHand">
					Drinks at ING
				</h2>
				<div className="mt-8 md:mt-14 text-xl md:text-2xl text-left px-12">
					<p className="font-shadows py-2 lg:py-4">Beer ¥670</p>
					<p className="font-shadows py-2 lg:py-4">Cocktails ¥650</p>
					<p className="font-bold underline underline-offset-4">
						English menu available
					</p>
				</div>
			</div>
		</div>
	);
};

export default OpeningHours;
