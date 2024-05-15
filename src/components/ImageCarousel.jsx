import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageCarouselSchema from "../schema/imageCarousel/imageCarouselSchema";

const ImageCarousel = () => {
  const [key, setKey] = useState(0);

  const images = imageCarouselSchema();

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
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            title={image.title}
            src={image.image}
            alt={`Slide - ${image.alt}`}
            className="max-w-full xl:max-w-7xl mx-auto"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
