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

function SpiritsList() {
	const [isSpiritsList, setIsSpiritsList] = useState(false);

	const handleSpiritsList = () => {
		setIsSpiritsList(!isSpiritsList);
	};

	return (
		<div className="flex flex-col justify-center items-center">
			<div
				onClick={handleSpiritsList}
				className="z-10 my-8 py-2 bg-gray-950 border-t border-b border-gray-400 w-10/12 md:w-9/12 lg:w-7/12 2xl:w-5/12 h-24 flex flex-col text-lg md:text-xl justify-center items-center text-center hover:cursor-pointer"
			>
				<h3 className="font-robotoSlab text-white text-2xl flex justify-center items-center">
					SPIRITS & LIQUOR
				</h3>
				<AnimatePresence mode="wait">
					{!isSpiritsList ? (
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
				{isSpiritsList && (
					<motion.div
						className="z-0 w-9/12 px-8 flex flex-col justify-center items-center"
						initial="closed"
						animate="open"
						exit="closed"
						variants={menuVariants}
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
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default SpiritsList;
