import logo from "../images/logo-ing-only-white.png";
import backgroundImg from "../images/ing-records.jpg";
import MenuList from "../components/menu/MenuList";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import barSnacksSchema from "../schema/menu/BarSnacksSchema";
import barMealSchema from "../schema/menu/BarMealSchema";
import beerSchema from "../schema/menu/BeerSchema";
import ginVodkaBasedDrinksSchema from "../schema/menu/ginVodkaBasedDrinksSchema";
import japaneseAlcoholSchema from "../schema/menu/japaneseAlcoholSchema";
import liqueurSchema from "../schema/menu/liqueurSchema";
import whiskeySchema from "../schema/menu/whiskeySchema";
import wineSchema from "../schema/menu/wineSchema";
import nonAlcoholicDrinksSchema from "../schema/menu/nonAlcoholicSchema";
import shotsSchema from "../schema/menu/shotsSchema";
import MenuJSONLD from "../components/seo/MenuJSONLD";

function Menu() {
  // ***** menu schema ******
  const barMeals = barMealSchema();
  const barSnacks = barSnacksSchema();
  const beerList = beerSchema();
  const wineList = wineSchema();
  const whiskeyList = whiskeySchema();
  const japaneseAlcohol = japaneseAlcoholSchema();
  const ginVodkaBasedDrinks = ginVodkaBasedDrinksSchema();
  const shotsList = shotsSchema();
  const liqueurList = liqueurSchema();
  const NonAlcoholic = nonAlcoholicDrinksSchema();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const logoVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const menuList = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  };

  const menuItems = [
    barMeals,
    barSnacks,
    beerList,
    wineList,
    whiskeyList,
    japaneseAlcohol,
    ginVodkaBasedDrinks,
    shotsList,
    liqueurList,
    NonAlcoholic,
  ];

  return (
    <motion.article
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      transition={{
        type: "spring",
        stiffness: 75,
        damping: 20,
      }}
      className="relative w-screen h-screen overflow-hidden"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 75,
          damping: 20,
        }}
        className="absolute -top-8 lg:top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-60 z-40 flex flex-col justify-center items-center pt-32 md:pt-20"
      >
        {/* Serverside SEO using react-helmet-async */}
        <Helmet>
          <link rel="canonical" href="http://www.kyotoingbar.com/menu" />
        </Helmet>
        <MenuJSONLD menuItems={menuItems} />

        <motion.div className="mt-32 flex justify-center w-full">
          <motion.div
            variants={logoVariant}
            initial="hidden"
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            className="h-fit w-10/12 md:w-9/12 lg:w-7/12 2xl:w-5/12 p-12 mt-28 mb-16 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-row justify-center rounded-lg shadow-xl shadow-slate-900"
          >
            <img src={logo} alt="ing logo" className="h-14 md:h-20" />
            <h2 className="font-serif text-5xl md:text-7xl px-4 mt-1">Menu</h2>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          <div className="w-full h-full">
            <motion.div
              layout
              variants={menuList}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                ease: "linear",
                layout: { type: "spring" },
              }}
              className="w-full h-auto flex flex-col items-center px-5"
            >
              <MenuList
                englishMenuTitle={barMeals[0].engTitle}
                japaneseMenuTitle={barMeals[0].jpnTitle}
                items={barMeals[0].items}
              />

              <MenuList
                englishMenuTitle={barSnacks[0].engTitle}
                japaneseMenuTitle={barSnacks[0].jpnTitle}
                items={barSnacks[0].items}
              />

              <MenuList
                englishMenuTitle={beerList[0].engTitle}
                japaneseMenuTitle={beerList[0].jpnTitle}
                items={beerList[0].items}
              />

              <MenuList
                englishMenuTitle={wineList[0].engTitle}
                japaneseMenuTitle={wineList[0].jpnTitle}
                items={wineList[0].items}
              />

              <MenuList
                englishMenuTitle={japaneseAlcohol[0].engTitle}
                japaneseMenuTitle={japaneseAlcohol[0].jpnTitle}
                items={japaneseAlcohol[0].items}
              />

              <MenuList
                englishMenuTitle={whiskeyList[0].engTitle}
                japaneseMenuTitle={whiskeyList[0].jpnTitle}
                extraCost={whiskeyList[0].extraCost}
                items={whiskeyList[0].items}
              />

              <MenuList
                englishMenuTitle={ginVodkaBasedDrinks[0].engTitle}
                japaneseMenuTitle={ginVodkaBasedDrinks[0].jpnTitle}
                additionCost={ginVodkaBasedDrinks[0].additionalCost}
                items={ginVodkaBasedDrinks[0].items}
              />

              <MenuList
                englishMenuTitle={shotsList[0].engTitle}
                japaneseMenuTitle={shotsList[0].jpnTitle}
                extraCost={shotsList[0].extraCost}
                items={shotsList[0].items}
              />

              <MenuList
                englishMenuTitle={liqueurList[0].engTitle}
                japaneseMenuTitle={liqueurList[0].jpnTitle}
                additionCost={liqueurList[0].additionalCost}
                items={liqueurList[0].items}
              />

              <MenuList
                englishMenuTitle={NonAlcoholic[0].engTitle}
                japaneseMenuTitle={NonAlcoholic[0].jpnTitle}
                items={NonAlcoholic[0].items}
              />
            </motion.div>
          </div>
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}

export default Menu;
