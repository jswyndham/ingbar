const OpeningHours = () => {
  return (
    <div className="relative my-4 overflow-hidden max-w-4xl text-center">
      {/* Background Image */}
      <img
        src="./src/images/ing-beer.jpg"
        alt="Background"
        className="w-full"
      />
      {/* The dark forefront for image*/}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Opening Hours */}
      <div className="absolute w-fit top-8 p-20">
        <h2 className="absolute left-52 text-white underline underline-offset-8 decoration-2 decoration-red-500 transform -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-6xl font-bold  font-gochiHand">
          Opening Hours
        </h2>
        <div className="mt-14 text-2xl">
          <p className="font-shadows py-4">Open 7 days a week</p>
          <p className="font-shadows py-4">7pm - 5am</p>
          <p className="font-sans py-4">
            ING is a late night establishment that caters to the late-night
            party-people of Kyoto.
          </p>
        </div>
      </div>

      {/* Drinks at ING */}
      <div className="absolute w-full bottom-12">
        <h2 className="absolute left-52 text-white underline underline-offset-8 decoration-2 decoration-red-500 transform -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-6xl font-bold  font-gochiHand">
          Drinks at ING
        </h2>
        <p className="">Open 7 days a week</p>
        <p className="">7pm - 5am</p>
        <p className="">
          ING is a late night establishment that caters to the late-night
          party-people of Kyoto.
        </p>
      </div>
    </div>
  );
};

export default OpeningHours;
