import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function BeerList() {
  const [isBeerList, setIsBeerList] = useState(false);

  const handleBeerList = () => {
    setIsBeerList(!isBeerList);
  };

  const menuVariants = {
    open: {
      maxHeight: 1500,
      opacity: 1,
      transition: {
        maxHeight: {
          duration: 0.8,
          ease: "linear",
        },
        opacity: {
          duration: 0.8,
          ease: "linear",
        },
      },
    },
    closed: {
      maxHeight: 0,
      opacity: 0,
      transition: {
        maxHeight: {
          duration: 0.6,
          ease: "linear",
        },
        opacity: {
          duration: 0.7,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-9/12 xl:w-7/12 3xl:w-5/12">
      <div
        onClick={handleBeerList}
        className="z-10 my-8 py-2 bg-gray-950 border-t border-b border-gray-400 w-full h-24 flex flex-col text-lg md:text-xl justify-center items-center text-center hover:cursor-pointer"
      >
        <div className="flex flex-col">
          <h3 className="pb-1 font-robotoSlab text-white  flex justify-center items-center">
            BEER
          </h3>

          <p className="font-robotoSlab text-white flex justify-center items-center">
            ビール
          </p>
        </div>
        <AnimatePresence mode="wait">
          {!isBeerList ? (
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
        {isBeerList && (
          <motion.div
            className="z-0 w-full flex flex-col justify-center items-center"
            initial="closed"
            style={{ opacity: 0 }}
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">YEBISU - Tap Draft Beer</p>
              <div className="flex flex-row">
                <p>エビス生ビール</p>
                <p className="pl-3 lg:pl-8">￥670</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Regular Bottle Beer</p>
              <div className="flex flex-row">
                <p>小瓶ビール(334ml)</p>
                <p className="pl-3 lg:pl-8">￥600</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Big Bottle Beer</p>
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
      </AnimatePresence>
    </div>
  );
}

export default BeerList;
