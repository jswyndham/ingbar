import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

// ***** Animation parameters menu item list ****
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

function ShotsList() {
	const [isWineList, setIsWineList] = useState(false);

	const handleWineList = () => {
		setIsWineList(!isWineList);
	};

	return (
		<div className="flex flex-col justify-center items-center w-full md:w-9/12 xl:w-7/12 3xl:w-5/12">
			<div
				onClick={handleWineList}
				className="z-10 my-8 py-2 bg-gray-950 border-t border-b border-gray-400 w-full h-24 flex flex-col text-lg md:text-xl justify-center items-center text-center hover:cursor-pointer"
			>
				<div className="flex flex-col">
					<h3 className="pb-1 font-robotoSlab text-white  flex justify-center items-center">
						SHOTS
					</h3>

					<p className="font-robotoSlab text-white flex justify-center items-center">
						ショット
					</p>
				</div>
				<AnimatePresence mode="wait">
					{!isWineList ? (
						<motion.div
							key="down-arrow"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							style={{ opacity: 0 }}
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
							style={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							<IoMdArrowDropup className="text-2xl mt-1 -mb-3" />
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<AnimatePresence>
				{isWineList && (
					<motion.div
						className="z-0 w-full flex flex-col justify-center items-center"
						initial="closed"
						animate="open"
						style={{ opacity: 0 }}
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
							<p className="text-yellow-500">Tequila</p>
							<div className="flex flex-row">
								<p>テキーラ</p>
								<p className="pl-8">￥620</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Rum</p>
							<div className="flex flex-row">
								<p>ラム</p>
								<p className="pl-8">￥620</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Stone's Ginger Wine
							</p>
							<div className="flex flex-row">
								<p>ストーンズジンジャーワイン</p>
								<p className="pl-8">￥620</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Jägermeister</p>
							<div className="flex flex-row">
								<p>イエガーマイスター</p>
								<p className="pl-8">￥620</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">
								Cinzano (Extra Dry, Rosso, & Bianco)
							</p>
							<div className="flex flex-row">
								<p>チンザノ</p>
								<p className="pl-8">￥620</p>
							</div>
						</div>

						<div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
							<p className="text-yellow-500">Ricard (liqueur)</p>
							<div className="flex flex-row">
								<p>リカール</p>
								<p className="pl-8">￥800</p>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default ShotsList;
