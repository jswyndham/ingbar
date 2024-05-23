import alexGoogleReview from '/images/reviewCarousel/alex-google-reviews.jpg';
import allenYelpReview from '/images/reviewCarousel/allan-yelp-reviews.jpg';
import mollyTripAdvisorReview from '/images/reviewCarousel/mollymacneil72-trip-advisor-reviews.jpg';
import rickGoogleReview from '/images/reviewCarousel/rick-irvine-google-reviews.jpg';

function reviewCarouselSchema() {
	return [
		{
			alt: 'ING google review',
			image: alexGoogleReview,
		},
		{
			alt: 'ING yelp review',
			image: allenYelpReview,
		},
		{
			alt: 'ING trip advisor review',
			image: mollyTripAdvisorReview,
		},
		{
			alt: 'ING Rick Google Review',
			image: rickGoogleReview,
		},
	];
}

export default reviewCarouselSchema;
