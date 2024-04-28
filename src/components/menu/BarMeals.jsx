import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

// ***** Animation parameters menu item list ****
const menuVariants = {
	open: {
		height: 'auto', // Use 'auto' for dynamic height
		opacity: 1,
		transition: {
			height: {
				duration: 1,
				ease: 'easeInOut',
				delay: 0.3, // Delay the height expansion to coordinate with other UI elements
			},
			opacity: {
				duration: 1,
				ease: 'easeInOut',
				delay: 0.5, // Delay opacity to match the height animation
			},
		},
	},
	closed: {
		height: 0,
		opacity: 0,
		transition: {
			height: {
				duration: 0.7,
				ease: 'easeInOut',
				delay: 0.1,
			},
			opacity: {
				duration: 0.7,
				ease: 'easeInOut',
			},
		},
	},
};

function BarMealsList() {
	// ***** Set state for toggle ******
	const [isMealsList, setIsMealsList] = useState(false);

	// ***** Handle toggle change ******
	const handleBarMeals = () => {
		setIsMealsList(!isMealsList);
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div
				onClick={handleBarMeals}
				className="z-10 my-8 py-2 bg-gray-950 border-t border-b border-gray-400 w-10/12 md:w-9/12 lg:w-7/12 2xl:w-5/12 h-24 flex flex-col text-lg md:text-xl justify-center items-center text-center hover:cursor-pointer"
			>
				<div className="flex flex-col">
					<h3 className="pb-1 font-robotoSlab text-white  flex justify-center items-center">
						BAR MEALS
					</h3>

					<p className="font-robotoSlab text-white flex justify-center items-center">
						バーのお食事
					</p>
				</div>

				<AnimatePresence mode="wait">
					{!isMealsList ? (
						<motion.div
							key="down-arrow"
							initial={{ opacity: 0 }}
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
				{isMealsList && (
					<motion.div
						className="z-0 w-9/12 px-8 flex flex-col justify-center items-center"
						initial="closed"
						animate="open"
						exit="closed"
						variants={menuVariants}
					>
						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Tacos Set</p>
							<div className="flex flex-row">
								<p>タコスセット</p>
								<p className="pl-3 lg:pl-8">￥780</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Fish & Chips</p>
							<div className="flex flex-row">
								<p>チキンアンドチップス</p>
								<p className="pl-3 lg:pl-8">￥780</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Chicken & Chips</p>
							<div className="flex flex-row">
								<p>フライドポテト</p>
								<p className="pl-3 lg:pl-8">￥400</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Pizza</p>
							<div className="flex flex-row">
								<p>ピザ</p>
								<p className="pl-3 lg:pl-8">￥750</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Instant Ramen</p>
							<div className="flex flex-row">
								<p>インスタントラーメン </p>
								<p className="pl-3 lg:pl-8">￥300</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Oden (Japanese pot hot)
							</p>
							<div className="flex flex-row">
								<p>おでん</p>
								<p className="pl-3 lg:pl-8">￥600</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Katsuobushi Donburi
							</p>
							<div className="flex flex-row">
								<p>かつおぶ丼</p>
								<p className="pl-3 lg:pl-8">￥500</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default BarMealsList;
