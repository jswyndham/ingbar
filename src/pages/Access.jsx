import backgroundImg from '../images/ing-outside.jpg';
import ingFront from '../images/ing-front.jpg';
import ingFirstFloor from '../images/ing-first-floor.jpg';
import ingStairs from '../images/ing-stairs.jpg';
import ingDoor from '../images/ing-door.jpg';
import logo from '../images/logo-ing-only-white.png';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

function Access() {
	const src = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6535.995455745594!2d135.770138!3d35.006762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010894bc02f181%3A0x76cad4bc31d743b0!2sRocking%20Bar%20ING!5e0!3m2!1sja!2sjp!4v1714718639346!5m2!1sja!2sjp`;

	useEffect(() => {
		console.log('Access page');
	});

	return (
		<article
			style={{
				backgroundImage: `url(${backgroundImg})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
			className="relative w-screen h-screen overflow-hidden"
		>
			<Helmet>
				<title>Rock Bar ING Kyoto - Access Map</title>
				<meta
					name="description"
					content="Rock Bar ING is located just next to Kiyamachi Street in Kyoto city, Japan. Find Kyoto's best late-night bar on the 2nd floor of the Kyoto Royal Building."
				/>
			</Helmet>

			<div className="absolute lg:top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-80 z-40 flex flex-col">
				<div className="flex flex-col justify-center items-center">
					<div className="flex justify-center">
						<div className="h-fit w-full p-6 md:p-12 mt-24 md:mt-14 mb-12 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-row justify-center rounded-lg shadow-xl shadow-slate-700">
							<h1 className="font-serif text-5xl md:text-7xl px-1 md:px-4 mt-1">
								Access to
							</h1>
							<img
								src={logo}
								alt="ing logo"
								className="h-14 md:h-20"
							/>
						</div>
					</div>

					<div>
						<div className="flex flex-col text-lg lg:text-xl mx-4">
							<p className="py-2 tracking-wider">
								<span className="text-yellow-400 font-bold">
									住所:{' '}
								</span>
								京都府京都市中京区西木屋町通蛸薬師上る南車屋町288-201
								京都ロイヤルビル２階
							</p>

							<p className="py-4 tracking-wide">
								<span className="text-yellow-400 font-bold">
									Address:{' '}
								</span>
								Kyoto Royal Building 2F Nishikiyamachi
								Takoyakushi Nakagyouku Kyoto city
							</p>
						</div>
					</div>

					<div className="w-11/12 flex justify-center">
						<figure className="p-4 bg-black rounded-xl overflow-hidden">
							<iframe
								width="900px"
								height="600px"
								style={{ border: 1 }}
								loading="lazy"
								allowFullScreen
								aria-hidden="false"
								tabIndex="0"
								referrerPolicy="no-referrer-when-downgrade"
								src={src}
							></iframe>
						</figure>
					</div>

					<div className="h-fit w-11/12 lg:w-7/12 p-2 lg:p-4 mt-14 mb-16 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-col 3xl:flex-row justify-center rounded-lg shadow-xl shadow-slate-700">
						<figure>
							<img
								src={ingFront}
								alt="Ing building front"
								title="Ing Kyoto building front"
								className="w-[1000px] rounded-lg"
							/>
						</figure>
						<div className="flex justify-center 2xl:align-middle 2xl:place-items-center 3xl:w-5/12">
							<div className="h-fit p-3 md:py-6 md:px-12">
								<div className="flex justify-center text-center tracking-widest">
									<h2 className="py-3 text-3xl font-gochiHand">
										Rock Bar{' '}
										<span className="text-red-600">
											ING
										</span>{' '}
										Kyoto Location
									</h2>
								</div>
								<p className="font-normal text-xl xl:px-6 2xl:px-24 3xl:px-4 xl:pb-3 tracking-wider">
									Rock Bar ING Kyoto is located on the{' '}
									<span className="text-yellow-400">
										2nd floor
									</span>{' '}
									of this building, the{' '}
									<span className="text-yellow-400">
										Kyoto Royal Building
									</span>
									.
								</p>
							</div>
						</div>
					</div>

					<div className="h-fit w-11/12 lg:w-7/12 p-2 lg:p-6 my-6 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-col 2xl:flex-row justify-center rounded-lg shadow-xl shadow-slate-700">
						<div className="flex justify-center 2xl:align-middle 2xl:place-items-center 2xl:w-5/12">
							<div className="h-fit p-3 md:py-6 md:px-12 2xl:px-4">
								<div className="flex justify-center text-center tracking-widest">
									<h2 className="py-3 text-3xl font-gochiHand">
										Go Down the Hall
									</h2>
								</div>
								<p className="font-normal text-xl xl:px-10 2xl:px-4 xl:pb-3 tracking-wider">
									When you find the{' '}
									<span className="text-yellow-400">
										Kyoto Royal Building
									</span>
									, walk inside and go down the hall.
								</p>
							</div>
						</div>
						<figure>
							<img
								src={ingFirstFloor}
								alt="Ing building first floor"
								title="Ing Kyoto building first floor"
								className="w-[800px] rounded-lg"
							/>
						</figure>
					</div>

					<div className="h-fit w-11/12 lg:w-7/12 p-2 lg:p-6 my-6 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-col 2xl:flex-row-reverse justify-center rounded-lg shadow-xl shadow-slate-700">
						<div className="flex justify-center 2xl:align-middle 2xl:place-items-center 2xl:w-5/12">
							<div className="h-fit p-3 md:py-6 md:px-12 2xl:px-4">
								<div className="flex justify-center text-center tracking-widest">
									<h2 className="py-3 text-3xl font-gochiHand">
										Stairs + Elevator on the Right
									</h2>
								</div>
								<p className="font-normal text-xl xl:px-10 2xl:px-4 xl:pb-3 tracking-wider">
									As you go down the hall, look to your right
									to find the{' '}
									<span className="text-yellow-400">
										stairs
									</span>{' '}
									and the{' '}
									<span className="text-yellow-400">
										elevator
									</span>
									. Take either to the{' '}
									<span className="text-yellow-400">
										2nd floor
									</span>
									.
								</p>
							</div>
						</div>
						<figure>
							<img
								src={ingStairs}
								alt="Ing building elevator"
								title="Ing Kyoto building elevator and stairs"
								className="w-[800px] rounded-lg"
							/>
						</figure>
					</div>

					<div className="h-fit md:h-md lg:h-lg w-11/12 lg:w-7/12 2xl:w-7/12 p-2 lg:p-3 my-6 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-col 2xl:flex-row justify-center rounded-lg shadow-xl shadow-slate-700">
						<div className="flex justify-center 2xl:align-middle 2xl:place-items-center 2xl:w-5/12">
							<div className="h-fit p-3 md:py-6 md:px-12 2xl:px-4">
								<div className="flex justify-center text-center tracking-widest">
									<h2 className="py-3 text-3xl font-gochiHand">
										<span className="text-red-600">
											ING
										</span>{' '}
										Door on the 2nd Floor
									</h2>
								</div>
								<p className="font-normal text-xl xl:px-6 2xl:px-4 xl:pb-3 tracking-wider">
									As you go down the hall, look to your right
									to find the{' '}
									<span className="text-yellow-400">
										stairs
									</span>{' '}
									and the{' '}
									<span className="text-yellow-400">
										elevator
									</span>
									. Take either to the{' '}
									<span className="text-yellow-400">
										2nd floor
									</span>
									.
								</p>
							</div>
						</div>
						<figure className="h-full">
							<img
								src={ingDoor}
								alt="Ing building elevator"
								title="Ing Kyoto door on the 2nd floor"
								className="w-[800px] rounded-lg"
							/>
						</figure>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Access;
