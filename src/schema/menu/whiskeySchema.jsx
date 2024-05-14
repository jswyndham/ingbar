function whiskeySchema() {
	return [
		{
			engTitle: 'Whiskey',
			jpnTitle: 'ウィスキー',
			extraCost: 100,
			items: [
				{
					engName: "Jack Daniel's Bourbon",
					jpnName: 'ジャックダニエル',
					description:
						'A distinctive Tennessee whiskey known for its smooth, sweet flavor.',
					price: 800,
					currency: 'JPY',
				},
				{
					engName: 'Jim Beam Bourbon',
					jpnName: 'ジムビーム',
					description:
						'A classic American bourbon with hints of caramel and vanilla.',
					price: 700,
					currency: 'JPY',
				},
				{
					engName: 'Four Roses Bourbon',
					jpnName: 'フォアローゼス',
					description:
						'A smooth and mellow bourbon, characterized by its rich and spicy flavors.',
					price: 700,
					currency: 'JPY',
				},
				{
					engName: 'Chivas Regal',
					jpnName: 'シーバスリーガル',
					description:
						'A smooth, rich, and versatile blended Scotch whisky.',
					price: 800,
					currency: 'JPY',
				},
				{
					engName: "Ballantine's",
					jpnName: 'バランタイン',
					description:
						'A balanced Scotch whisky with deep malt flavors, balanced with a light nuttiness.',
					price: 700,
					currency: 'JPY',
				},
				{
					engName: 'Glenfiddich',
					jpnName: 'グレンフィディック',
					description:
						'A world-renowned single malt Scotch whisky with notes of pear and oak.',
					price: 800,
					currency: 'JPY',
				},
				{
					engName: 'Jameson',
					jpnName: 'ジェムソン',
					description:
						'An Irish whiskey that is triple distilled for smoothness and balance.',
					price: 800,
					currency: 'JPY',
				},
				{
					engName: 'Japanese Whiskey',
					jpnName: '日本のウィスキー',
					description:
						'A fine selection of whiskey from Japan, known for its meticulous craftsmanship.',
					price: 700,
					currency: 'JPY',
				},
				{
					engName: '“High grade” Japanese Whiskey',
					jpnName: '高級の日本のウィスキー',
					description:
						'A premium Japanese whiskey offering complex flavors and a smooth finish.',
					price: 1000,
					currency: 'JPY',
				},
			],
		},
	];
}

export default whiskeySchema;
