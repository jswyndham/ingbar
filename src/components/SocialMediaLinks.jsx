// import twitter from "../images/twitter-x-logo.png";
import instagram from '../images/instagram-50-white-2.png';
import facebook from '../images/facebook-50-white.png';
import youtube from '../images/youtube-48.png';

const SocialMediaLinks = () => {
	return (
		<div className="flex flex-row gap-10 my-2">
			{/* <a
				href=""
				target="_blank"
				rel="noopener noreferrer"
				className="w-7 h-7"
			>
				<img src={twitter} alt="Rock Bar ING Twitter" />
			</a> */}
			<a
				href="https://www.instagram.com/ingbarhacokatsuyuki/?hl=en"
				target="_blank"
				rel="noopener noreferrer"
				className="w-7 h-7"
			>
				<img src={instagram} alt="Rock Bar ING Instagram" />
			</a>
			<a
				href="https://www.facebook.com/search/top?q=ing%20bar%20%E3%83%AD%E3%83%83%E3%82%AF%E5%B1%85%E9%85%92%E5%B1%8B%E3%82%A4%E3%83%B3%E3%82%B0"
				target="_blank"
				rel="noopener noreferrer"
				className="w-7 h-7"
			>
				<img src={facebook} alt="Rock Bar ING Facebook" />
			</a>
			<a
				href="https://www.youtube.com/@inghacobox"
				target="_blank"
				rel="noopener noreferrer"
				className="w-7 h-7"
			>
				<img src={youtube} alt="Rock Bar ING YouTube" />
			</a>
		</div>
	);
};

export default SocialMediaLinks;
