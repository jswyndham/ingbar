const AboutUs = () => {
	return (
		<div className="h-fit p-6 md:p-10 lg:mx-4 bg-black shadow-lg md:shadow-xl shadow-slate-600 md:shadow-slate-600 border border-slate-700">
			<h2 className="text-3xl lg:text-5xl font-gochiHand underline underline-offset-4 decoration-2 decoration-red-500">
				About ING Bar
			</h2>
			<p className="text-lg lg:text-2xl font-sans p-6 tracking-wide">
				Established in 1998, Rock Bar Ing has been an vital icon of the
				Kyoto bar scene. It has played an important part of the Kyoto
				night scene and been a local favorite for both Japanese and
				foreign residents alike. It has offered a space for those who
				love good music, a social atmosphere, and{' '}
				<span className="text-red-500">The Rolling Stones</span>.{' '}
			</p>
		</div>
	);
};

export default AboutUs;
