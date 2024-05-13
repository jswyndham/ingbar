import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

// ***** Animation parameters menu item list ****
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
        duration: 1,
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

function LiqueurList() {
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
            LIQUEUR
          </h3>

          <p className="font-robotoSlab text-white flex justify-center items-center">
            リキュール
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
              <p className="text-yellow-300">** Twist of fresh lime **</p>
              <div className="flex flex-row">
                <p>コーラ、ソーダ、ジンジャエールで割りますと</p>
                <p>ライムの実１切れ</p>
                <p className="pl-3 lg:pl-8">￥100</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-montserrat">
              <p className="text-yellow-300">
                ** Juice mixer added (orange, grapefruit, pineapple) **
              </p>

              <div className="flex flex-row">
                <p>オレンジ、グレープフルーツ、パイナップルで割りますと</p>
                <p className="pl-3 lg:pl-8">￥50</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Malibu</p>
              <div className="flex flex-row">
                <p>マリブ</p>
                <p className="pl-8">￥750</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Pina Colada</p>
              <div className="flex flex-row">
                <p>ピニャコラーダ</p>
                <p className="pl-8">￥800</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Campari</p>
              <div className="flex flex-row">
                <p>カンパリ</p>
                <p className="pl-8">￥700</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Spumoni</p>
              <div className="flex flex-row">
                <p>スプモーニ </p>
                <p className="pl-8">￥750</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Cassis</p>
              <div className="flex flex-row">
                <p>カシス</p>
                <p className="pl-8">￥700</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Shirley Temple</p>
              <div className="flex flex-row">
                <p>シャーリーテンプル</p>
                <p className="pl-8">￥750</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Peach</p>
              <div className="flex flex-row">
                <p>ピーチ</p>
                <p className="pl-8">￥700</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Peach Fizz</p>
              <div className="flex flex-row">
                <p>ピーチフィズ</p>
                <p className="pl-8">￥700</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Fuzzy Navel</p>
              <div className="flex flex-row">
                <p>ファジーネーブル</p>
                <p className="pl-8">￥750</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Shanghai Peach</p>
              <div className="flex flex-row">
                <p>シャンハイピーチ</p>
                <p className="pl-8">￥750</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Vodka Cranberry</p>
              <div className="flex flex-row">
                <p>ウォッカクランベリー</p>
                <p className="pl-8">￥750</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Tequila Sunrise</p>
              <div className="flex flex-row">
                <p>テキーラサンライズ</p>
                <p className="pl-8">￥750</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Kahlua Milk</p>
              <div className="flex flex-row">
                <p>カルアミルク</p>
                <p className="pl-8">￥700</p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center py-4 text-xl font-serif">
              <p className="text-yellow-500">Baileys Milk</p>
              <div className="flex flex-row">
                <p>ベイリーズミルク</p>
                <p className="pl-8">￥750</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LiqueurList;
