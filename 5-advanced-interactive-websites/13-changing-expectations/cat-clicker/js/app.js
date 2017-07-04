var cats = [
	{
		name: 'Xuxa the Kitten',
		img: 'img/xuxa.jpg',
		clicks: 0
	},
	{
		name: 'Dramatic Kitten',
		img: 'img/dramatic-kitten.jpg',
		clicks: 0
	},
	{
		name: 'Lexy',
		img: 'img/lexy.jpg',
		clicks: 0
	},
	{
		name: 'Mary',
		img: 'img/mary.jpg',
		clicks: 0
	},
	{
		name: 'Suzy',
		img: 'img/suzy.jpg',
		clicks: 0
	}
];

// Initialise the page once the DOM is ready
$(document).ready(function(e) {
	// Populate the Cat Picker section
	for (var i = 0; i < cats.length; i++) {
		var cat = cats[i];

		// Create the list item
		$('#cat-list').append('<li id=' + i + '>' + cat.name + '</li>');
	}
})
