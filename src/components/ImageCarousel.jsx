import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import imageOne from '../images/ing-room.jpg';
import imageTwo from '../images/ing-bar.jpg';
import imageThree from '../images/hako_ing_logo-small.jpg';
import imageFour from '../images/ing-records.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [imageOne, imageTwo, imageThree, imageFour];

const ImageCarousel = () => {
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
						className="max-w-full xl:max-w-4xl max-h-[700px] mx-auto"
					/>
				</div>
			))}
		</Slider>
	);
};

export default ImageCarousel;
