import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { useRef } from 'react';
import { useEffect } from 'react';

// ***** Animation parameters menu item list ****
const menuVariants = {
	open: {
		maxHeight: 2000,
		opacity: 1,
		transition: {
			maxHeight: {
				duration: 0.8,
				ease: 'linear',
			},
			opacity: {
				duration: 0.9,
				ease: 'linear',
			},
		},
	},
	closed: {
		maxHeight: 0,
		opacity: 0,
		transition: {
			maxHeight: {
				duration: 0.5,
				ease: 'linear',
			},
			opacity: {
				duration: 0.6,
				ease: 'linear',
			},
		},
	},
};

function menuList({
	englishMenuTitle,
	japaneseMenuTitle,
	additionCost,
	extraCost,
	items,
}) {
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
					<h3 className="pb-1 font-robotoSlab uppercase text-white flex justify-center items-center">
						{englishMenuTitle}
					</h3>

					<p className="font-robotoSlab text-white flex justify-center items-center">
						{japaneseMenuTitle}
					</p>
				</div>

				<AnimatePresence mode="wait">
					{!isSnacksList ? (
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
				{isSnacksList && (
					<motion.div
						className="z-0 w-full flex flex-col justify-center items-center"
						initial="closed"
						style={{ opacity: 0 }}
						animate="open"
						exit="closed"
						variants={menuVariants}
					>
						{additionCost && (
							<div className="flex flex-col justify-center items-center py-4 text-xl font-montserrat">
								<p className="text-yellow-300">
									** Mixer added (cola, soda, ginger ale, etc)
									**
								</p>
								<p className="text-yellow-300">
									** Twist of fresh lime **
								</p>
								<div className="flex flex-row">
									<p>
										コーラ、ソーダ、ジンジャエールで割りますと
									</p>
									<p>ライムの実１切れ</p>
									<p className="pl-3 lg:pl-8">￥100</p>
								</div>
							</div>
						)}

						{extraCost && (
							<div className="flex flex-col justify-center items-center py-4 text-xl font-montserrat">
								<p className="text-yellow-300">
									** Mixer added (cola, soda, ginger ale, etc)
									**
								</p>
								<div className="flex flex-row">
									<p>
										コーラ、ソーダ、ジンジャエールで割りますと
									</p>
									<p className="pl-3 lg:pl-8">
										￥{extraCost}
									</p>
								</div>
							</div>
						)}

						{items.map((item, index) => (
							<div
								key={index}
								className="flex flex-col justify-center items-center py-4 text-xl font-serif"
							>
								<h4 className="text-yellow-500">
									{item.engName}
								</h4>
								<div className="flex flex-row">
									<p>{item.jpnName}</p>
									<p className="pl-3 lg:pl-8">
										￥{item.price}
									</p>
								</div>
							</div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default menuList;
