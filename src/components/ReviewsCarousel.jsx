import Slider from 'react-slick';
import imageOne from '../images/alex-google-reviews.jpg';
import imageTwo from '../images/allan-yelp-reviews.jpg';
import imageThree from '../images/mollymacneil72-trip-advisor-reviews.jpg';
import imageFour from '../images/rick-irvine-google-reviews.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

const images = [imageOne, imageTwo, imageThree, imageFour];

const ReviewsCarousel = () => {
	const [key, setKey] = useState(0);

	useEffect(() => {
		const handleResize = () => {
			// Reinitialize the component key, causing a re-render to better handle re-sizing adjustment
			setKey((prevKey) => prevKey + 1);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
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
			{images.map((url, index) => (
				<div key={index}>
					<img
						src={url}
						alt={`Slide ${index}`}
						className="flex w-full xl:max-w-5xl mx-auto border border-slate-600 shadow-md shadow-slate-400"
					/>
				</div>
			))}
		</Slider>
	);
};

export default ReviewsCarousel;
