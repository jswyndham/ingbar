import React from 'react';

function OpeningHours() {
	return (
		<div className="relative my-4 overflow-hidden max-w-4xl text-center">
			<img
				src="./src/images/ing-beer.jpg"
				alt="Background"
				className="w-full"
			/>
			<div className="absolute inset-0 bg-black opacity-60"></div>
			<h2 className="absolute w-full top-8 lg:top-12 left-48 text-white underline underline-offset-8 decoration-2 decoration-red-500 transform -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-6xl font-bold  font-gochiHand">
				Opening Hours
			</h2>
		</div>
	);
}

export default OpeningHours;
