import backgroundImg from "../images/backgroundImages/ing-outside.jpg";
import ingFront from "../images/accessImages/ing-front.jpg";
import ingFirstFloor from "../images/accessImages/ing-first-floor.jpg";
import ingStairs from "../images/accessImages/ing-stairs.jpg";
import ingDoor from "../images/accessImages/ing-door.jpg";
import logo from "../images/logo-ing-only-white.png";
import { Helmet } from "react-helmet-async";
import AccessJSONLD from "../components/seo/AccessJSONLD";
import { useState } from "react";
import Map from "../components/access/Map";

function Access() {
  const src = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6535.995455745594!2d135.770138!3d35.006762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010894bc02f181%3A0x76cad4bc31d743b0!2sRocking%20Bar%20ING!5e0!3m2!1sja!2sjp!4v1714718639346!5m2!1sja!2sjp`;

  const [isAccessTranslate, setIsAccessTranslate] = useState(false);

  const handleAccessTranslate = () => {
    setIsAccessTranslate(!isAccessTranslate);
  };

  return (
    <article
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="relative w-screen h-screen overflow-hidden"
    >
      <Helmet>
        <title>Directions to Rock Bar ING Kyoto - Access & Map</title>
        <meta
          name="description"
          content="Find directions to Rock Bar ING Kyoto located at Kyoto Royal Building. Access details, parking information, and Google Maps link included."
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
    default-src 'self';
    img-src 'self' https://example.com;
    script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://www.google.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    frame-src 'self' https://www.google.com;
  `}
        />
      </Helmet>
      <AccessJSONLD />

      <div className="absolute lg:top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-80 z-40 flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <div className="h-fit w-full p-6 md:p-12 mt-24 md:mt-14 mb-12 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-row justify-center rounded-lg shadow-xl shadow-slate-700">
              <h1 className="font-serif text-5xl md:text-7xl px-1 md:px-4 mt-1">
                Access to
              </h1>
              <img src={logo} alt="ing logo" className="h-14 md:h-20" />
            </div>
          </div>

          <div className="flex flex-col text-lg lg:text-xl mx-4">
            <p className="py-2 tracking-wider">
              <span className="text-yellow-400 font-bold">住所: </span>
              京都府京都市中京区西木屋町通蛸薬師上る南車屋町288-201
              京都ロイヤルビル２階
            </p>

            <p className="py-4 tracking-wide">
              <span className="text-yellow-400 font-bold">Address: </span>
              Kyoto Royal Building 2F Nishikiyamachi Takoyakushi Nakagyouku
              Kyoto city
            </p>
          </div>

          {/* Component for the google map */}
          <Map src={src} />

          <div className="flex justify-end mt-16 mb-6">
            <button
              onClick={handleAccessTranslate}
              className="w-80 md:96 border border-red-700 py-3 px-6 rounded-full bg-gradient-to-b from-red-500 to-red-900 text-lg text-white font-bold shadow-lg transform hover:translate-y-1 active:translate-y-2"
            >
              {!isAccessTranslate ? "日本語翻訳に押して" : "Press for English"}
            </button>
          </div>

          <div className="h-fit w-11/12 lg:w-7/12 p-2 lg:p-4 mt-8 mb-16 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-col 3xl:flex-row justify-center rounded-lg shadow-xl shadow-slate-700">
            <figure>
              <img
                src={ingFront}
                alt="Ing building front"
                title="Ing Kyoto building front"
                className="w-[1000px] rounded-lg"
              />
            </figure>
            <div className="flex justify-center 2xl:align-middle 2xl:place-items-center 3xl:w-5/12">
              {!isAccessTranslate ? (
                <div className="h-fit p-3 md:py-6 md:px-12">
                  <div className="flex justify-center text-center tracking-widest">
                    <h2 className="py-3 text-3xl font-gochiHand">
                      Rock Bar <span className="text-red-600">ING</span> Kyoto
                      Location
                    </h2>
                  </div>
                  <p className="font-normal text-xl xl:px-6 2xl:px-24 3xl:px-4 xl:pb-3 tracking-wider">
                    Rock Bar ING Kyoto is located on the{" "}
                    <span className="text-yellow-400">2nd floor</span> of this
                    building, the{" "}
                    <span className="text-yellow-400">
                      Kyoto Royal Building
                    </span>
                    .
                  </p>
                </div>
              ) : (
                <div className="h-fit p-3 md:py-6 md:px-12">
                  <div className="flex justify-center text-center tracking-widest">
                    <h2 className="py-3 text-3xl font-gochiHand">
                      ロックバー
                      <span className="text-red-600">ING</span>
                      京都の所在地
                    </h2>
                  </div>
                  <p className="font-normal text-xl xl:px-6 2xl:px-24 3xl:px-4 xl:pb-3 tracking-wider">
                    ロックバー ING 京都は、この
                    <span className="text-yellow-400">建物の2階</span>、
                    <span className="text-yellow-400">京都ロイヤルビル</span>
                    にあります。
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="h-fit w-11/12 lg:w-7/12 p-2 lg:p-6 my-6 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-col 2xl:flex-row justify-center rounded-lg shadow-xl shadow-slate-700">
            <div className="flex justify-center 2xl:align-middle 2xl:place-items-center 2xl:w-5/12">
              {!isAccessTranslate ? (
                <div className="h-fit p-3 md:py-6 md:px-12 2xl:px-4">
                  <div className="flex justify-center text-center tracking-widest">
                    <h2 className="py-3 text-3xl font-gochiHand">
                      Go Down the Hall
                    </h2>
                  </div>
                  <p className="font-normal text-xl xl:px-10 2xl:px-4 xl:pb-3 tracking-wider">
                    When you find the{" "}
                    <span className="text-yellow-400">
                      Kyoto Royal Building
                    </span>
                    , walk inside and go down the hall.
                  </p>
                </div>
              ) : (
                <div className="h-fit p-3 md:py-6 md:px-12 2xl:px-4">
                  <div className="flex justify-center text-center tracking-widest">
                    <h2 className="py-3 text-3xl font-gochiHand">
                      廊下を進んでください
                    </h2>
                  </div>
                  <p className="font-normal text-xl xl:px-10 2xl:px-4 xl:pb-3 tracking-wider">
                    <span className="text-yellow-400">京都ロイヤルビル</span>
                    を見つけたら、中に入り、廊下を進んでください。
                  </p>
                </div>
              )}
            </div>
            <figure>
              <img
                src={ingFirstFloor}
                alt="Ing building first floor"
                title="Ing Kyoto building first floor"
                className="w-[800px] rounded-lg"
              />
            </figure>
          </div>

          <div className="h-fit w-11/12 lg:w-7/12 p-2 lg:p-6 my-6 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-col 2xl:flex-row-reverse justify-center rounded-lg shadow-xl shadow-slate-700">
            <div className="flex justify-center 2xl:align-middle 2xl:place-items-center 2xl:w-5/12">
              {!isAccessTranslate ? (
                <div className="h-fit p-3 md:py-6 md:px-12 2xl:px-4">
                  <div className="flex justify-center text-center tracking-widest">
                    <h2 className="py-3 text-3xl font-gochiHand">
                      Stairs & Elevator on the Right
                    </h2>
                  </div>
                  <p className="font-normal text-xl xl:px-10 2xl:px-4 xl:pb-3 tracking-wider">
                    As you go down the hall, look to your right to find the{" "}
                    <span className="text-yellow-400">stairs</span> and the{" "}
                    <span className="text-yellow-400">elevator</span>. Take
                    either to the{" "}
                    <span className="text-yellow-400">2nd floor</span>.
                  </p>
                </div>
              ) : (
                <div className="h-fit p-3 md:py-6 md:px-12 2xl:px-4">
                  <div className="flex justify-center text-center tracking-widest">
                    <h2 className="py-3 text-3xl font-gochiHand">
                      右手にある階段とエレベーター
                    </h2>
                  </div>
                  <p className="font-normal text-xl xl:px-10 2xl:px-4 xl:pb-3 tracking-wider">
                    廊下を進むと、右手に
                    <span className="text-yellow-400">階段</span>と
                    <span className="text-yellow-400">エレベーター</span>
                    があります。どちらかで2階に上がってください。
                  </p>
                </div>
              )}
            </div>
            <figure>
              <img
                src={ingStairs}
                alt="Ing building elevator"
                title="Ing Kyoto building elevator and stairs"
                className="w-[800px] rounded-lg"
              />
            </figure>
          </div>

          <div className="h-fit md:h-md lg:h-lg w-11/12 lg:w-7/12 2xl:w-7/12 p-2 lg:p-3 my-6 bg-gray-400 bg-opacity-40 backdrop-blur-sm flex flex-col 2xl:flex-row justify-center rounded-lg shadow-xl shadow-slate-700">
            <div className="flex justify-center 2xl:align-middle 2xl:place-items-center 2xl:w-5/12">
              {!isAccessTranslate ? (
                <div className="h-fit p-3 md:py-6 md:px-12 2xl:px-4">
                  <div className="flex justify-center text-center tracking-widest">
                    <h2 className="py-3 text-3xl font-gochiHand">
                      <span className="text-red-600">ING</span> Door on the 2nd
                      Floor
                    </h2>
                  </div>
                  <p className="font-normal text-xl xl:px-6 2xl:px-4 xl:pb-3 tracking-wider">
                    As you get to the 2nd floor, look to your right and you will
                    see the entrance to{" "}
                    <span className="text-yellow-400">Rock Bar ING</span>.
                  </p>
                </div>
              ) : (
                <div className="h-fit p-3 md:py-6 md:px-12 2xl:px-4">
                  <div className="flex justify-center text-center tracking-widest">
                    <h2 className="py-3 text-3xl font-gochiHand">
                      2階の
                      <span className="text-red-600">ING</span> のドア
                    </h2>
                  </div>
                  <p className="font-normal text-xl xl:px-6 2xl:px-4 xl:pb-3 tracking-wider">
                    2階に上がると、右手に
                    <span className="text-yellow-400">ロックバー ING</span>
                    の入り口が見えます。
                  </p>
                </div>
              )}
            </div>
            <figure className="h-full">
              <img
                src={ingDoor}
                alt="Ing building elevator"
                title="Ing Kyoto door on the 2nd floor"
                className="w-[800px] rounded-lg"
              />
            </figure>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Access;
