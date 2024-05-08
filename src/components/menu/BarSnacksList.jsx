import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { useRef } from 'react';
import { useEffect } from 'react';

// ***** Animation parameters menu item list ****
const menuVariants = {
	open: {
		height: 'auto', // Use 'auto' for dynamic height
		opacity: 1,
		transition: {
			height: {
				duration: 0.7,
				ease: 'easeInOut',
				delay: 0.3, // Delay the height expansion to coordinate with other UI elements
			},
			opacity: {
				duration: 0.7,
				ease: 'easeInOut',
				delay: 0.4, // Delay opacity to match the height animation
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

function BarSnacksList() {
	// ***** Set state for toggle ******
	const [isSnacksList, setIsSnacksList] = useState(false);
	const wrapperRef = useRef(null);

	// ***** Handler Functions ******

	// Handle toggle change
	const handleBarSnacks = (event) => {
		event.stopPropagation(); // Stop the click from propagating further
		setIsSnacksList(!isSnacksList);
	};

	// Handle click outside the component
	const handleClickOutside = (event) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			setIsSnacksList(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isSnacksList]);

	return (
		<div
			ref={wrapperRef}
			className="flex flex-col justify-center items-center w-full md:w-9/12 xl:w-7/12 3xl:w-5/12"
		>
			<div
				onClick={handleBarSnacks}
				className="z-10 my-8 py-2 bg-gray-950 border-t border-b border-gray-400 w-full h-24 flex flex-col text-lg md:text-xl justify-center items-center text-center hover:cursor-pointer"
			>
				<div className="flex flex-col">
					<h3 className="pb-1 font-robotoSlab text-white flex justify-center items-center">
						BAR SNACKS
					</h3>

					<p className="font-robotoSlab text-white flex justify-center items-center">
						バースナック
					</p>
				</div>

				<AnimatePresence mode="wait">
					{!isSnacksList ? (
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
				{isSnacksList && (
					<motion.div
						className="z-0 w-8/12 flex flex-col justify-center items-center"
						initial="closed"
						animate="open"
						exit="closed"
						variants={menuVariants}
					>
						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Japanese Rice Crackers
							</p>
							<div className="flex flex-row">
								<p>あられ盛り合わせ</p>
								<p className="pl-3 lg:pl-8">￥350</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Edamame / Green Soy Beans
							</p>
							<div className="flex flex-row">
								<p>枝豆</p>
								<p className="pl-3 lg:pl-8">￥400</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">White Rice</p>
							<div className="flex flex-row">
								<p>白いご飯</p>
								<p className="pl-3 lg:pl-8">￥300</p>
							</div>
						</div>

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
							<p className="text-yellow-500">Parmesan Fries</p>
							<div className="flex flex-row">
								<p>パルメザンチーズポテト</p>
								<p className="pl-3 lg:pl-8">￥450</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Cocktail Wieners</p>
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
							<p className="text-yellow-500">Assorted Cheeses</p>
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
							<p className="text-yellow-500">Camembert Cheese</p>
							<div className="flex flex-row">
								<p>カマンベールチーズ</p>
								<p className="pl-3 lg:pl-8">￥550</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Cheese & Crackers</p>
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
			</AnimatePresence>
		</div>
	);
}

export default BarSnacksList;
