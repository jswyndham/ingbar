import React from "react";
import { motion } from "framer-motion";

const AccessSection = ({ isAccessTranslate, variants, section }) => (
  <div
    className={`h-fit w-11/12 lg:w-9/12 2xl:w-7/12 p-2 lg:p-6 my-6 bg-gray-600 bg-opacity-40 backdrop-blur-sm flex flex-col ${
      section.reverse ? "2xl:flex-row-reverse" : "2xl:flex-row"
    } justify-center rounded-lg shadow-xl shadow-slate-800`}
  >
    <div className="flex justify-center 2xl:align-middle 2xl:place-items-center 2xl:w-5/12 3xl:2xl:w-3/12">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 1 }}
        key={isAccessTranslate}
      >
        <div className="h-fit p-3 md:py-6 md:px-12 2xl:px-4">
          <div className="flex justify-center text-center tracking-widest">
            <h2 className="py-3 text-3xl font-gochiHand">{section.title}</h2>
          </div>
          <p
            className="font-normal text-xl py-3 xl:px-10 2xl:px-4 xl:pb-3 tracking-wider"
            dangerouslySetInnerHTML={{
              __html: section.description,
            }}
          ></p>
        </div>
      </motion.div>
    </div>
    <figure className="flex justify-center">
      <img
        src={section.image}
        alt={section.alt}
        title={section.title}
        className="w-[800px] rounded-lg"
      />
    </figure>
  </div>
);

export default AccessSection;
