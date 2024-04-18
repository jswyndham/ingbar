import Slider from 'react-slick';
import imageOne from '../images/alex-google-reviews.jpg';
import imageTwo from '../images/allan-yelp-reviews.jpg';
import imageThree from '../images/mollymacneil72-trip-advisor-reviews.jpg';
import imageFour from '../images/rick-irvine-google-reviews.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
						className="max-w-full max-h-[700px] mx-auto border border-slate-600 shadow-md shadow-slate-400"
					/>
				</div>
			))}
		</Slider>
	);
};

export default ReviewsCarousel;
