import { useEffect, useState } from "react";
import logo from "../images/ING-Logo-blackBG-whiteTEXT.png";
import ImageCarousel from "../components/ImageCarousel";
import OpeningHours from "../components/OpeningHours";
import AboutUs from "../components/AboutUs";

const Home = () => {
  // ***** user State for logo ********
  const [hideLogo, setHideLogo] = useState(false);

  useEffect(() => {
    // Automatically hide the logo after 3 seconds
    const timer = setTimeout(() => {
      setHideLogo(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <article className="bg-black">
      <div
        className={`fullscreen-logo flex flex-col ${
          hideLogo ? "hidden-logo" : ""
        }`}
      >
        <h1 className="font-gochiHand text-5xl mb-16 text-red-600">
          Kyoto's #1 late night bar!
        </h1>

        <img
          src={logo}
          alt="Black and white ING logo"
          style={{ width: "80%", maxHeight: "80vh" }}
          onClick={() => setHideLogo(true)} // Optionally hide logo on click
        />
      </div>

      <div className="flex justify-center py-6">
        <img
          src={logo}
          alt="Black and white ING logo"
          className="flex w-3xl lg:max-w-5xl h-3xl lg:max-h-5xl"
        />
      </div>
      <div className="mb-10">
        <ImageCarousel />
      </div>

      <div className="flex flex-col lg:flex-row-reverse">
        <div className="w-1/2 flex justify-center">
          <OpeningHours />
        </div>
        <div className="w-full lg:w-1/2">
          <AboutUs />
        </div>
      </div>
      <div className="w-screen flex justify-center">
        <div className="w-full lg:max-w-4xl h-fit p-8 my-10 bg-gray-900 rounded-lg">
          <div className="flex flex-col w-fit">
            <h2 className="font-gochiHand text-4xl lg:text-5xl">
              "Man is not a camel!"
            </h2>
            <p className="font-robotoSlab text-xl text-red-600 lg:text-2xl text-end pr-6">
              - Hako
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
