import { Link } from 'react-router-dom';
import logo from '../images/ING-Logo-blackBG-whiteTEXT.png';
import SocialMediaLinks from './SocialMediaLinks';

const Footer = () => {
	return (
		<>
			<footer className="w-screen h-fit py-3 bg-black border-2 border-t-slate-700 p-6 text-base-content">
				<div className="flex flex-col justify-center items-center">
					{/* Social Media */}
					<div>
						<SocialMediaLinks />
					</div>

					{/* Contact Info */}
					<div className="flex flex-row py-3">
						<div>
							<h3>Contact Information</h3>
						</div>

						<div className="my-4">
							<Link href="/">
								<img
									src={logo}
									alt="Rock Bar ING white logo"
									className="h-28"
								/>
							</Link>
						</div>
						<div>
							<h3 className="font-shadows font-bold text-lg">
								Visit Us
							</h3>
							<p>Open 7 days a week | 7pm - 5am</p>
							<p className="w-64">
								〒604-8022 Kyoto, Nakagyo Ward,
								南車屋町２８８－２０１ 京都ロイヤルビル２階
							</p>
						</div>
					</div>

					<div className="text-white">
						<p>
							©2024 | All Rights Reserved | Powered by JSW Web Dev
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
