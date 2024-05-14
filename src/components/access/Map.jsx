import React from 'react';

const Map = ({ src }) => (
	<div className="w-11/12 flex justify-center">
		<figure className="p-4 bg-black rounded-xl overflow-hidden">
			<iframe
				width="900px"
				height="600px"
				style={{ border: 1 }}
				loading="lazy"
				allowFullScreen
				aria-hidden="false"
				tabIndex="0"
				referrerPolicy="no-referrer-when-downgrade"
				src={src}
			></iframe>
		</figure>
	</div>
);

export default Map;
