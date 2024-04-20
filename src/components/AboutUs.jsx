import SocialMediaLinks from './SocialMediaLinks';

const AboutUs = () => {
	return (
		<div className="h-fit p-6 md:p-10 my-12 lg:mx-4 bg-black">
			<div className="flex flex-col text-left pb-4">
				<h2 className="text-3xl lg:text-4xl font-robotoSlab relative overflow-hidden">
					ING & Social Media
					<span className="after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-red-500 after:block"></span>
				</h2>

				<p className="xl:w-10/12 text-lg lg:text-2xl text-left font-sans px-1 pt-4 pb-6 tracking-wide leading-loose">
					Listed in the{` `}
					<span className="text-blue-300">
						<a
							href="https://www-lonelyplanet-com-6c06.imagizer.com/japan/kansai/kyoto/downtown-kyoto/nightlife/rocking-bar-ing/a/poi-dri/1232807/1323305"
							target="_blank"
							rel="noopener noreferrer"
						>
							lonely planet
						</a>
					</span>
					{` `}and recognized by multiple online sources, Bar ING is
					the go-to venue for Kyoto social circles. Follow us online
					and connect with us no matter where you are around the
					world.
				</p>
				<div className="flex justify-start pt-4 pl-8">
					<SocialMediaLinks />
				</div>
			</div>
			<div className="flex flex-col text-right pt-6">
				<h2 className="text-3xl lg:text-4xl font-robotoSlab relative overflow-hidden">
					About ING Bar
					<span className="after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-red-500 after:block"></span>
				</h2>

				<div className="flex justify-end">
					<p className="xl:w-10/12 text-lg lg:text-2xl font-sans px-1 py-6 tracking-wide leading-loose">
						Established in 1998, Rock Bar Ing has been an vital icon
						of the Kyoto bar scene. It has played an important part
						of the Kyoto night scene and been a local favorite for
						both Japanese and foreign residents alike. It has
						offered a space for those who love good music, a social
						atmosphere, and
						<span className="text-red-500">
							{' '}
							The Rolling Stones
						</span>
						.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
