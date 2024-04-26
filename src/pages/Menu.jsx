import { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../images/ing-large-white-transparent.png';
import backgroundImg from '../images/ing-records.jpg';

function Menu() {
	const [isFoodList, setIsFoodList] = useState(false);
	const [isBeerList, setIsBeerList] = useState(false);
	const [isSpriritsList, setIsSpriritsList] = useState(false);
	const [isWineList, setIsWineList] = useState(false);

	const handleBarFood = () => {
		setIsFoodList(!isFoodList);
	};

	const handleBeerList = () => {
		setIsBeerList(!isBeerList);
	};

	const handleSpiritsList = () => {
		setIsSpriritsList(!isSpriritsList);
	};

	const handleWineList = () => {
		setIsWineList(!isWineList);
	};

	const menuVariants = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { type: 'spring', stiffness: 50, damping: 20 },
				opacity: { duration: 0.8, ease: 'easeInOut' },
			},
		},
		closed: {
			y: '-100%', // Starts from above the visible area
			opacity: 0,
			transition: {
				y: { type: 'spring', stiffness: 70, damping: 15 },
				opacity: { duration: 0.8, ease: 'easeInOut' },
			},
		},
	};

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
			<div className="absolute top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-60 z-40 flex flex-col">
				<div className="pt-28 pb-16 lg:py-16 flex flex-row justify-center">
					<img src={logo} alt="ing logo" className="h-20 mx-4" />
					<h2 className="font-serif text-7xl px-4 mt-1">Menu</h2>
				</div>

				{/* BAR FOOD */}
				<div className="flex flex-col justify-center items-center pb-6">
					<div
						onClick={handleBarFood}
						className="z-10 bg-gray-950 border-t border-b border-gray-400 w-9/12 h-20 flex justify-center text-center hover:cursor-pointer"
					>
						<h3 className="font-robotoSlab text-white text-2xl flex justify-center items-center">
							BAR FOOD
						</h3>
					</div>

					{isFoodList && (
						<motion.div
							className="z-0 w-9/12 p-8 flex flex-col justify-center items-center"
							initial="closed"
							animate={isFoodList ? 'open' : 'closed'}
							variants={menuVariants}
							exit={{ opacity: 0 }}
						>
							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									World Famous Garlic Festival
								</p>
								<div className="flex flex-row">
									<p>にんにく祭</p>
									<p className="pl-3 lg:pl-8">￥450</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">Fried Chicken</p>
								<div className="flex flex-row">
									<p>鳥の唐揚げ</p>
									<p className="pl-3 lg:pl-8">￥600</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">French Fries</p>
								<div className="flex flex-row">
									<p>フライドポテト</p>
									<p className="pl-3 lg:pl-8">￥400</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">Chili Fries</p>
								<div className="flex flex-row">
									<p>辛いポテト</p>
									<p className="pl-3 lg:pl-8">￥450</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">Garlic Fries</p>
								<div className="flex flex-row">
									<p>ガーリックフライドポテト</p>
									<p className="pl-3 lg:pl-8">￥450</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									Parmesan Fries
								</p>
								<div className="flex flex-row">
									<p>パルメザンチーズポテト</p>
									<p className="pl-3 lg:pl-8">￥450</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									Cocktail Wieners
								</p>
								<div className="flex flex-row">
									<p>ボイルドウインナー</p>
									<p className="pl-3 lg:pl-8">￥550</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									Chinese Shrimp Crackers
								</p>
								<div className="flex flex-row">
									<p>中華えびせんべい</p>
									<p className="pl-3 lg:pl-8">￥400</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									Assorted Cheeses
								</p>
								<div className="flex flex-row">
									<p>チーズ盛り合わせ</p>
									<p className="pl-3 lg:pl-8">￥550</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									Fried Cheese Sticks
								</p>
								<div className="flex flex-row">
									<p>チーズ揚げ</p>
									<p className="pl-3 lg:pl-8">￥400</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									Fried Camembert Cheese
								</p>
								<div className="flex flex-row">
									<p>フライドカマンベールチーズ</p>
									<p className="pl-3 lg:pl-8">￥550</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									Fried Cream Cheese
								</p>
								<div className="flex flex-row">
									<p>フライドクリームチーズ</p>
									<p className="pl-3 lg:pl-8">￥550</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									Camembert Cheese
								</p>
								<div className="flex flex-row">
									<p>カマンベールチーズ</p>
									<p className="pl-3 lg:pl-8">￥550</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									Cheese & Crackers
								</p>
								<div className="flex flex-row">
									<p>チーズクラッカー</p>
									<p className="pl-3 lg:pl-8">￥550</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">Chocolate</p>
								<div className="flex flex-row">
									<p>チョコレート</p>
									<p className="pl-3 lg:pl-8">￥350</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">Popcorn</p>
								<div className="flex flex-row">
									<p>ポップコーン</p>
									<p className="pl-3 lg:pl-8">￥550</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">Mixed Nuts</p>
								<div className="flex flex-row">
									<p> ミックスナッツ</p>
									<p className="pl-3 lg:pl-8">￥350</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">Crisps</p>
								<div className="flex flex-row">
									<p>ポテトチップス</p>
									<p className="pl-3 lg:pl-8">￥400</p>
								</div>
							</div>
						</motion.div>
					)}
				</div>

				{/* BEER LIST */}
				<div className="flex flex-col justify-center items-center py-6">
					<div
						onClick={handleBeerList}
						className="z-10 bg-gray-950 border-t border-b border-gray-400 w-9/12 h-20 flex justify-center text-center hover:cursor-pointer"
					>
						<h3 className="font-robotoSlab text-white text-2xl flex justify-center items-center">
							BEER
						</h3>
					</div>

					{isBeerList && (
						<motion.div
							className="z-0 w-9/12 p-8 flex flex-col justify-center items-center"
							initial="closed"
							animate={isBeerList ? 'open' : 'closed'}
							variants={menuVariants}
							exit={{ opacity: 0 }}
						>
							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									YEBISU - Tap Draft Beer
								</p>
								<div className="flex flex-row">
									<p>エビス生ビール</p>
									<p className="pl-3 lg:pl-8">￥670</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									Regular Bottle Beer
								</p>
								<div className="flex flex-row">
									<p>小瓶ビール(334ml)</p>
									<p className="pl-3 lg:pl-8">￥600</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">
									Big Bottle Beer
								</p>
								<div className="flex flex-row">
									<p>大瓶ビール(633ml)</p>
									<p className="pl-3 lg:pl-8">￥700</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">Guinness Beer</p>
								<div className="flex flex-row">
									<p>ギネスビール</p>
									<p className="pl-3 lg:pl-8">￥720</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">Corona Beer</p>
								<div className="flex flex-row">
									<p>コロナビール</p>
									<p className="pl-3 lg:pl-8">￥720</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
								<p className="text-yellow-500">Red Eye</p>
								<div className="flex flex-row">
									<p>レッドアイ</p>
									<p className="pl-3 lg:pl-8">￥720</p>
								</div>
							</div>
						</motion.div>
					)}
				</div>

				{/* SPIRIT LIST */}
				<div className="flex flex-col justify-center items-center py-6">
					<div
						onClick={handleSpiritsList}
						className="z-10 bg-gray-950 border-t border-b border-gray-400 w-9/12 h-20 flex justify-center text-center hover:cursor-pointer"
					>
						<h3 className="font-robotoSlab text-white text-2xl flex justify-center items-center">
							SPIRITS & LIQUOR
						</h3>
					</div>

					{isSpriritsList && (
						<motion.div
							className="w-9/12 p-8 flex flex-col justify-center items-center"
							initial="closed"
							animate={isSpriritsList ? 'open' : 'closed'}
							variants={menuVariants}
							exit={{ opacity: 0 }}
						>
							<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
								<p className="text-yellow-500">
									YEBISU - Tap Draft Beer
								</p>
								<div className="flex flex-row">
									<p>エビス生ビール</p>
									<p className="pl-8">￥670</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
								<p className="text-yellow-500">
									Regular bottle Beer
								</p>
								<div className="flex flex-row">
									<p>小瓶ビール(334ml)</p>
									<p className="pl-8">￥600</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
								<p className="text-yellow-500">
									Big bottle Beer
								</p>
								<div className="flex flex-row">
									<p>大瓶ビール(633ml)</p>
									<p className="pl-8">￥700</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
								<p className="text-yellow-500">Guinness Beer</p>
								<div className="flex flex-row">
									<p>ギネスビール</p>
									<p className="pl-12">￥720</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
								<p className="text-yellow-500">Corona Beer</p>
								<div className="flex flex-row">
									<p>コロナビール</p>
									<p className="pl-12">￥720</p>
								</div>
							</div>

							<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
								<p className="text-yellow-500">Red Eye</p>
								<div className="flex flex-row">
									<p>レッドアイ</p>
									<p className="pl-12">￥720</p>
								</div>
							</div>
						</motion.div>
					)}
				</div>

				{/* WINE */}
				<div className="flex flex-col justify-center items-center py-16">
					<div
						onClick={handleWineList}
						className=" bg-gray-950 border-t border-b border-gray-400 w-9/12 h-20 flex justify-center text-center"
					>
						<h3 className="font-robotoSlab text-white text-2xl flex justify-center items-center">
							BAR FOOD
						</h3>
					</div>

					<div className="w-9/12 p-8 flex flex-col justify-center items-center">
						<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
							<p className="text-yellow-500">
								YEBISU - Tap Draft Beer
							</p>
							<div className="flex flex-row">
								<p>エビス生ビール</p>
								<p className="pl-8">￥670</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
							<p className="text-yellow-500">
								Regular bottle Beer
							</p>
							<div className="flex flex-row">
								<p>小瓶ビール(334ml)</p>
								<p className="pl-8">￥600</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
							<p className="text-yellow-500">Big bottle Beer</p>
							<div className="flex flex-row">
								<p>大瓶ビール(633ml)</p>
								<p className="pl-8">￥700</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
							<p className="text-yellow-500">Guinness Beer</p>
							<div className="flex flex-row">
								<p>ギネスビール</p>
								<p className="pl-12">￥720</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
							<p className="text-yellow-500">Corona Beer</p>
							<div className="flex flex-row">
								<p>コロナビール</p>
								<p className="pl-12">￥720</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-2 text-xl font-serif">
							<p className="text-yellow-500">Red Eye</p>
							<div className="flex flex-row">
								<p>レッドアイ</p>
								<p className="pl-12">￥720</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

export default Menu;
