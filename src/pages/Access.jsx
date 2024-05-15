import backgroundImg from '../images/backgroundImages/ing-outside.jpg';
import ingFront from '../images/accessImages/ing-front.jpg';
import ingFirstFloor from '../images/accessImages/ing-first-floor.jpg';
import ingStairs from '../images/accessImages/ing-stairs.jpg';
import ingDoor from '../images/accessImages/ing-door.jpg';
import logo from '../images/logo-ing-only-white.png';
import { Helmet } from 'react-helmet-async';
import AccessJSONLD from '../components/seo/AccessJSONLD';
import { useState } from 'react';
import Map from '../components/access/Map';
import AccessSection from '../components/access/AccessSection';

function Access() {
	const src = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6535.995455745594!2d135.770138!3d35.006762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010894bc02f181%3A0x76cad4bc31d743b0!2sRocking%20Bar%20ING!5e0!3m2!1sja!2sjp!4v1714718639346!5m2!1sja!2sjp`;

	const [isAccessTranslate, setIsAccessTranslate] = useState(false);

	const handleAccessTranslate = () => {
		setIsAccessTranslate(!isAccessTranslate);
	};

	const variants = {
		hidden: { opacity: 0, x: -20 },
		visible: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: 20 },
	};

	const sections = [
		{
			title: !isAccessTranslate
				? 'Rock Bar ING Kyoto Location'
				: 'ロックバー ING 京都の所在地',
			description: !isAccessTranslate
				? "Rock Bar ING Kyoto is located on the <span class='text-yellow-400'>2nd floor</span> of this building, the Kyoto Royal Building."
				: "ロックバー ING 京都は、この<span class='text-yellow-400'>建物の2階</span>、京都ロイヤルビルにあります。",
			image: ingFront,
			alt: 'Ing building front',
			reverse: false,
		},
		{
			title: !isAccessTranslate
				? 'Go Down the Hall'
				: '廊下を進んでください',
			description: !isAccessTranslate
				? "When you find the Kyoto Royal Building, walk inside and <span class='text-yellow-400'>go down the hall</span>."
				: "京都ロイヤルビルを見つけたら、中に入り、<span class='text-yellow-400'>廊下を進んでください。</span>",
			image: ingFirstFloor,
			alt: 'Ing building first floor',
			reverse: false,
		},
		{
			title: !isAccessTranslate
				? 'Stairs & Elevator on the Right'
				: '右手にある階段とエレベーター',
			description: !isAccessTranslate
				? "As you go down the hall, look to your right to find the <span class='text-yellow-400'>stairs and the elevator</span>. Take either to the 2nd floor."
				: "廊下を進むと、右手に<span class='text-yellow-400'>階段とエレベーター</span>があります。どちらかで2階に上がってください。",
			image: ingStairs,
			alt: 'Ing building elevator',
			reverse: true,
		},
		{
			title: !isAccessTranslate
				? 'ING Door on the 2nd Floor'
				: '2階の ING のドア',
			description: !isAccessTranslate
				? "As you get to the 2nd floor, <span class='text-yellow-400'>look to your right</span> and you will see the entrance to Rock Bar ING."
				: "2階に上がると、<span class='text-yellow-400'>右手に</span>ロックバー ING の入り口が見えます。",
			image: ingDoor,
			alt: 'Ing building door',
			reverse: false,
		},
	];

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
				<title>Directions to Rock Bar ING Kyoto - Access & Map</title>
				<meta
					name="description"
					content="Find directions to Rock Bar ING Kyoto located at Kyoto Royal Building. Access details, parking information, and Google Maps link included."
				/>
				<meta
					httpEquiv="Content-Security-Policy"
					content={`
    default-src 'self';
    img-src 'self' https://example.com;
    script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://www.google.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    frame-src 'self' https://www.google.com;
  `}
				/>
				<link
					rel="canonical"
					href="http://www.kyotoingbar.com/access/"
				/>
			</Helmet>
			<AccessJSONLD />

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
							Kyoto Royal Building 2F Nishikiyamachi Takoyakushi
							Nakagyouku Kyoto city
						</p>
					</div>

					{/* Component for the google map */}
					<Map src={src} />

					<div className="flex justify-end mt-16 mb-6">
						<button
							onClick={handleAccessTranslate}
							className="w-80 md:96 border border-red-700 py-3 px-6 rounded-full bg-gradient-to-b from-red-500 to-red-900 text-lg text-white font-bold shadow-lg transform hover:translate-y-1 active:translate-y-2"
						>
							{!isAccessTranslate
								? '日本語翻訳に押して'
								: 'Press for English'}
						</button>
					</div>

					{sections.map((section, index) => (
						<AccessSection
							key={index}
							isAccessTranslate={isAccessTranslate}
							variants={variants}
							section={section}
						/>
					))}
				</div>
			</div>
		</article>
	);
}

export default Access;
