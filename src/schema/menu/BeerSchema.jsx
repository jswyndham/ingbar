function beerSchema() {
	return [
		{
			engTitle: 'Beer',
			jpnTitle: 'ビール',
			items: [
				{
					engName: 'YEBISU - Tap Draft Beer',
					jpnName: 'エビス生ビール',
					description: 'A smooth, rich draft beer from Yebisu.',
					price: 670,
					currency: 'JPY',
				},
				{
					engName: 'Regular Bottle Beer',
					jpnName: '小瓶ビール (334ml)',
					description: 'A regular sized bottle of premium beer.',
					price: 600,
					currency: 'JPY',
				},
				{
					engName: 'Big Bottle Beer',
					jpnName: '大瓶ビール (633ml)',
					description:
						'A large bottle of beer for extended enjoyment.',
					price: 700,
					currency: 'JPY',
				},
				{
					engName: 'Guinness Beer',
					jpnName: 'ギネスビール',
					description: 'Rich and creamy Guinness stout.',
					price: 720,
					currency: 'JPY',
				},
				{
					engName: 'Corona Beer',
					jpnName: 'コロナビール',
					description:
						'A light, refreshing Corona beer with a lime wedge.',
					price: 720,
					currency: 'JPY',
				},
				{
					engName: 'Red Eye',
					jpnName: 'レッドアイ',
					description:
						'A beer cocktail made with tomato juice and beer.',
					price: 720,
					currency: 'JPY',
				},
			],
		},
	];
}

export default beerSchema;
