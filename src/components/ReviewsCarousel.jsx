import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import reviewCarouselSchema from "../schema/reviewCarousel/reviewCarouselSchema";

const ReviewsCarousel = () => {
  const [key, setKey] = useState(0);

  const images = reviewCarouselSchema();

  useEffect(() => {
    const handleResize = () => {
      // Reinitialize the component key, causing a re-render to better handle re-sizing adjustment
      setKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true, // photo fade selection
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image.image}
            alt={`Slide - ${image.alt}`}
            className="flex w-full xl:max-w-5xl mx-auto border border-slate-600 shadow-md shadow-slate-400"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ReviewsCarousel;
