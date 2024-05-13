import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

function NonAlcoholicList() {
	const [isNonAlcoholicList, setIsNonAlcoholicList] = useState(false);

	const handleNonAlcoholicList = () => {
		setIsNonAlcoholicList(!isNonAlcoholicList);
	};

	const menuVariants = {
		open: {
			maxHeight: 1000,
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
				onClick={handleNonAlcoholicList}
				className="z-10 my-8 py-2 bg-gray-950 border-t border-b border-gray-400 w-full h-24 flex flex-col text-lg md:text-xl justify-center items-center text-center hover:cursor-pointer"
			>
				<div className="flex flex-col">
					<h3 className="pb-1 font-robotoSlab text-white  flex justify-center items-center">
						NON-ALCOHOLIC
					</h3>

					<p className="font-robotoSlab text-white flex justify-center items-center">
						ノンアルコール
					</p>
				</div>
				<AnimatePresence mode="wait">
					{!isNonAlcoholicList ? (
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
				{isNonAlcoholicList && (
					<motion.div
						className="z-0 w-full flex flex-col justify-center items-center"
						initial="closed"
						style={{ opacity: 0 }}
						animate="open"
						exit="closed"
						variants={menuVariants}
					>
						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Mineral Water</p>
							<div className="flex flex-row">
								<p>ミネラルウオーター</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Coffee</p>
							<div className="flex flex-row">
								<p>コーヒー</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Oolong Tea</p>
							<div className="flex flex-row">
								<p>ウーロン茶</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Pepsi Cola</p>
							<div className="flex flex-row">
								<p>ペプシコーラ</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Dry Ginger Ale</p>
							<div className="flex flex-row">
								<p>ジンジャエール(辛口)</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Tomato Juice</p>
							<div className="flex flex-row">
								<p>トマトジュース</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Apple Juice</p>
							<div className="flex flex-row">
								<p>アップルジュース</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Orange Juice</p>
							<div className="flex flex-row">
								<p>オレンジジュース</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Cranberry Juice</p>
							<div className="flex flex-row">
								<p>クランベリージュース</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Pineapple Juice</p>
							<div className="flex flex-row">
								<p>パイナップルジュース</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Grapefruit Juice</p>
							<div className="flex flex-row">
								<p>グレープフルーツジュース</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default NonAlcoholicList;
