import React from 'react';

function MenuJSONLD({ menuItems }) {
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Menu',
		name: 'Menu at Rock Bar ING Kyoto',
		description:
			'Explore our diverse menu featuring cocktails, whiskies, wines, and non-alcoholic drinks.',
		hasMenuSection: menuItems.map((section) => ({
			'@type': 'MenuSection',
			name: section.engTitle,
			hasMenuItem: section.items.map((item) => ({
				'@type': 'MenuItem',
				name: item.engName,
				description: item.description,
				offers: {
					'@type': 'Offer',
					price: item.price,
					priceCurrency: 'JPY',
				},
			})),
		})),
	};

	return (
		<script type="application/ld+json">
			{JSON.stringify(structuredData)}
		</script>
	);
}

export default MenuJSONLD;
