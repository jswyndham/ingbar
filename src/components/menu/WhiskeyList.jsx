import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

function WhiskeyList() {
	const [isWhiskeyList, setIsWhiskeyList] = useState(false);

	const handleWhiskeyList = () => {
		setIsWhiskeyList(!isWhiskeyList);
	};

	const menuVariants = {
		open: {
			maxHeight: 1500,
			opacity: 1,
			transition: {
				maxHeight: {
					duration: 0.8,
					ease: [0.04, 0.62, 0.23, 0.98],
					delay: 0.2,
				},
				opacity: {
					duration: 0.7,
					ease: 'easeInOut',
					delay: 0.4,
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
				onClick={handleWhiskeyList}
				className="z-10 my-8 py-2 bg-gray-950 border-t border-b border-gray-400 w-full h-24 flex flex-col text-lg md:text-xl justify-center items-center text-center hover:cursor-pointer"
			>
				<div className="flex flex-col">
					<h3 className="pb-1 font-robotoSlab text-white  flex justify-center items-center">
						WHISKEY
					</h3>

					<p className="font-robotoSlab text-white flex justify-center items-center">
						ウィスキー
					</p>
				</div>
				<AnimatePresence mode="wait">
					{!isWhiskeyList ? (
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
				{isWhiskeyList && (
					<motion.div
						className="z-0 w-full flex flex-col justify-center items-center"
						initial="closed"
						style={{ opacity: 0 }}
						animate="open"
						exit="closed"
						variants={menuVariants}
					>
						<div className="flex flex-col justify-center items-center py-4 text-xl font-montserrat">
							<p className="text-yellow-300">
								** Mixer added (cola, soda, ginger ale, etc) **
							</p>
							<div className="flex flex-row">
								<p>
									コーラ、ソーダ、ジンジャエールで割りますと
								</p>
								<p className="pl-3 lg:pl-8">￥100</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Jack Daniel's Bourbon
							</p>
							<div className="flex flex-row">
								<p>ジャックダニエル</p>
								<p className="pl-3 lg:pl-8">￥800</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Jim Beam Bourbon</p>
							<div className="flex flex-row">
								<p>ジムビーム</p>
								<p className="pl-3 lg:pl-8">￥700</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Four Roses Bourbon
							</p>
							<div className="flex flex-row">
								<p>フォアローゼス</p>
								<p className="pl-3 lg:pl-8">￥700</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Chivas Regal</p>
							<div className="flex flex-row">
								<p>シーバスリーガル</p>
								<p className="pl-3 lg:pl-8">￥800</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Ballantine's</p>
							<div className="flex flex-row">
								<p>バランタイン</p>
								<p className="pl-3 lg:pl-8">￥700</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Glenfiddich</p>
							<div className="flex flex-row">
								<p>グレンフィディック</p>
								<p className="pl-3 lg:pl-8">￥800</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Jameson</p>
							<div className="flex flex-row">
								<p>ジェムソン</p>
								<p className="pl-3 lg:pl-8">￥800</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Japanese Whiskey</p>
							<div className="flex flex-row">
								<p>日本のウィスキー</p>
								<p className="pl-3 lg:pl-8">￥700</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								“High grade” Japanese Whiskey
							</p>
							<div className="flex flex-row">
								<p>高級の日本のウィスキー</p>
								<p className="pl-3 lg:pl-8">￥1000</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default WhiskeyList;
