import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

function JapaneseAlcoholList() {
	const [isJapaneseAlcoholList, setIsJapaneseAlcoholList] = useState(false);

	const handleJapaneseAlcoholList = () => {
		setIsJapaneseAlcoholList(!isJapaneseAlcoholList);
	};

	const menuVariants = {
		open: {
			maxHeight: 1500,
			opacity: 1,
			transition: {
				maxHeight: {
					duration: 1.2,
					ease: [0.04, 0.62, 0.23, 0.98],
				},
				opacity: {
					duration: 0.9,
					ease: 'easeInOut',
				},
			},
		},
		closed: {
			maxHeight: 0,
			opacity: 0,
			transition: {
				maxHeight: {
					duration: 0.8,
					ease: [0.04, 0.62, 0.23, 0.98],
				},
				opacity: {
					duration: 0.5,
					ease: 'easeInOut',
				},
			},
		},
	};

	return (
		<div className="flex flex-col justify-center items-center w-full md:w-9/12 xl:w-7/12 3xl:w-5/12">
			<div
				onClick={handleJapaneseAlcoholList}
				className="z-10 my-8 py-2 bg-gray-950 border-t border-b border-gray-400 w-full h-24 flex flex-col text-lg md:text-xl justify-center items-center text-center hover:cursor-pointer"
			>
				<div className="flex flex-col">
					<h3 className="pb-1 font-robotoSlab text-white  flex justify-center items-center">
						JAPANESE ALCOHOL
					</h3>

					<p className="font-robotoSlab text-white flex justify-center items-center">
						日本の酒類
					</p>
				</div>
				<AnimatePresence mode="wait">
					{!isJapaneseAlcoholList ? (
						<motion.div
							key="down-arrow"
							initial={{ opacity: 0 }}
							style={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							<IoMdArrowDropdown className="text-2xl mt-1 -mb-3" />
						</motion.div>
					) : (
						<motion.div
							key="up-arrow"
							initial={{ opacity: 0 }}
							style={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							<IoMdArrowDropup className="text-2xl mt-1 -mb-3" />
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<AnimatePresence>
				{isJapaneseAlcoholList && (
					<motion.div
						className="z-0 w-full flex flex-col justify-center items-center"
						initial="closed"
						style={{ opacity: 0 }}
						animate="open"
						exit="closed"
						variants={menuVariants}
					>
						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Japanese Rice Wine - single
							</p>
							<div className="flex flex-row">
								<p>一合の日本酒</p>
								<p className="pl-3 lg:pl-8">￥650</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Japanese Rice Wine - double
							</p>
							<div className="flex flex-row">
								<p>二合の日本酒</p>
								<p className="pl-3 lg:pl-8">￥650</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Shochu (Wheat / Potato)
							</p>
							<div className="flex flex-row">
								<p>焼酎ロック、水割り(麦,芋)</p>
								<p className="pl-3 lg:pl-8">￥650</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Okinawa Awamori</p>
							<div className="flex flex-row">
								<p>沖縄の泡盛</p>
								<p className="pl-3 lg:pl-8">￥650</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Lemon Chu-hai</p>
							<div className="flex flex-row">
								<p>チューハイレモン</p>
								<p className="pl-3 lg:pl-8">￥700</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Oolong-hai</p>
							<div className="flex flex-row">
								<p>ウーロンハイ</p>
								<p className="pl-3 lg:pl-8">￥700</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Plum Wine (Umeshu)
							</p>
							<div className="flex flex-row">
								<p>梅酒ロック</p>
								<p className="pl-3 lg:pl-8">￥600</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Plum Wine Soda (umesyu soda)
							</p>
							<div className="flex flex-row">
								<p>梅酒ソーダ </p>
								<p className="pl-3 lg:pl-8">￥650</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default JapaneseAlcoholList;
