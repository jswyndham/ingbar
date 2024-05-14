function wineSchema() {
	return [
		{
			engTitle: 'Wine',
			jpnTitle: 'ワイン',
			items: [
				{
					engName: 'Bottle of House Red Wine',
					jpnName: 'フルボトル赤',
					description:
						'A full bottle of our house red wine, perfect for sharing.',
					price: 2700,
					currency: 'JPY',
				},
				{
					engName: 'Glass of House Red Wine',
					jpnName: 'グラスワイン(赤)',
					description:
						'A glass of our house red wine, perfect for a single serving.',
					price: 600,
					currency: 'JPY',
				},
				{
					engName: 'Sangria',
					jpnName: 'サングリア',
					description:
						'A refreshing wine cocktail made with red wine, fruit juices, and sliced fruit.',
					price: 750,
					currency: 'JPY',
				},
			],
		},
	];
}

export default wineSchema;
