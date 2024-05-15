import { useState } from "react";
import { motion } from "framer-motion";
import SocialMediaLinks from "./SocialMediaLinks";

const AboutUs = () => {
  const [isTranslate, setIsTranslate] = useState(false);

  const handleLanguage = () => {
    setIsTranslate(!isTranslate);
  };

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <div className="h-fit p-6 md:p-10 my-12 lg:mx-4 bg-black">
      <div className="flex flex-col text-left pb-4">
        <div className="flex justify-end mt-2 mb-10">
          <button
            onClick={handleLanguage}
            className="w-36 border border-red-700 py-3 px-6 rounded-full bg-gradient-to-b from-red-500 to-red-900 text-lg text-white font-bold shadow-lg transform hover:translate-y-1 active:translate-y-2"
          >
            {!isTranslate ? "日本語" : "English"}
          </button>
        </div>
        <h2 className="text-3xl lg:text-4xl font-robotoSlab relative overflow-hidden">
          ING & Social Media
          <span className="after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-red-500 after:block"></span>
        </h2>

        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 1 }}
          key={isTranslate}
        >
          {!isTranslate ? (
            <p className="xl:w-10/12 text-lg lg:text-xl text-left font-sans px-1 pt-4 pb-6 tracking-wide leading-loose">
              Listed in the famous travel guide,{` `}
              <span className="text-blue-300">
                <a
                  href="https://www-lonelyplanet-com-6c06.imagizer.com/japan/kansai/kyoto/downtown-kyoto/nightlife/rocking-bar-ing/a/poi-dri/1232807/1323305"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lonely planet
                </a>
              </span>
              {` `}and featured in{" "}
              <span className="text-blue-300">
                <a
                  href="https://www.romancing-japan.com/posts/rock-bar-ing-kyoto-locals-hangout/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  online reviews
                </a>
              </span>
              . ING is loved by people around the world, Rock Bar ING is the
              go-to venue for the Kyoto nightlife. Follow us online and connect
              with us no matter where you are.
            </p>
          ) : (
            <p className="xl:w-10/12 text-lg lg:text-xl text-left font-sans px-1 pt-4 pb-4 tracking-wide leading-loose">
              有名な旅行ガイド『
              <span className="text-blue-300">
                <a
                  href="https://www-lonelyplanet-com-6c06.imagizer.com/japan/kansai/kyoto/downtown-kyoto/nightlife/rocking-bar-ing/a/poi-dri/1232807/1323305"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ロンリープラネット
                </a>
              </span>
              』に掲載され、世界中の人々に愛されているロックバー ING
              は、京都のナイトライフの定番スポットです。オンラインで私たちをフォローして、どこにいても私たちとつながりましょう。
            </p>
          )}
        </motion.div>
        <div className="flex justify-center w-full bg-slate-400 py-3 my-12 rounded-xl bg-opacity-30 border border-slate-800 shadow-lg shadow-slate-300">
          <SocialMediaLinks />
        </div>
      </div>
      <div className="flex flex-col text-right pt-6">
        <h2 className="text-3xl lg:text-4xl font-robotoSlab relative overflow-hidden">
          About ING Bar
          <span className="after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-red-500 after:block"></span>
        </h2>

        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 1 }}
          key={isTranslate ? "japanese" : "english"}
        >
          {!isTranslate ? (
            <div className="flex justify-end">
              <p className="xl:w-10/12 text-lg lg:text-xl font-sans px-1 py-6 tracking-wide leading-loose">
                Established in 1998, Rock Bar Ing has been an vital icon of the
                Kyoto bar scene. It has played an important part of the Kyoto
                night scene and been a local favorite for both Japanese and
                foreign residents alike. It has offered a space for those who
                love good music, a social atmosphere, and
                <span className="text-red-500"> The Rolling Stones</span>.
              </p>
            </div>
          ) : (
            <div className="flex justify-end">
              <p className="xl:w-10/12 text-lg lg:text-xl font-sans px-1 py-6 tracking-wide leading-loose">
                1998年に設立されたロックバー ING
                は、京都のバーシーンの重要なアイコンとなっています。京都のナイトライフの重要な一部として、日本人と外国人の住民の両方に愛され続けています。良い音楽、社交的な雰囲気、そして
                <span className="text-red-500">ローリング・ストーンズ</span>
                を愛する人々のためのスペースを提供してきました。
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
