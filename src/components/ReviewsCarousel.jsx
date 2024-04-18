import Slider from "react-slick";
import imageOne from "../images/ing-room.jpg";
import imageTwo from "../images/ing-bar.jpg";
import imageThree from "../images/hako_ing_logo-small.jpg";
import imageFour from "../images/ing-records.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [imageOne, imageTwo, imageThree, imageFour];

const ReviewsCarousel = () => {
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
      {images.map((url, index) => (
        <div key={index}>
          <img
            src={url}
            alt={`Slide ${index}`}
            className="max-w-full max-h-[700px] mx-auto"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ReviewsCarousel;
