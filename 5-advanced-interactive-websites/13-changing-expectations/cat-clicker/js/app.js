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

		$('li#' + i).click(cat, (function(e) {
			var cat = e.data;

			// Clear the existing clicker content and any event handler
			$('#cat-clicker').empty();

			// Now load up the selected cat
			$('#cat-clicker').append(
				'<h2>' + cat.name + '</h2>' +
				'<img src="' + cat.img + '" alt="' + cat.name + '" id="cat">' +
				'<p id="cat-clicks">Number of clicks: ' + cat.clicks + '</p>'
			);

			// Set the click event handler for the cat in the clicker section
			$('#cat').click(function(e) {
				// Update the counter and display the new count
				cat.clicks++;
				$('#cat-clicks').text('Number of clicks: ' + cat.clicks);
			})
		}));
	}
});
