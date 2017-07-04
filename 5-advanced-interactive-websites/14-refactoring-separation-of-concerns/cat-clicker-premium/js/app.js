$(function(){
	var model = {
		currentCat: null,
		cats: [
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
		]
	};

	var octopus = {
		init: function() {
			catListView.init();
		},
		getCats: function() {
			return model.cats;
		}
	};

	var catListView = {
		init: function() {
			var cats = octopus.getCats();

			cats.forEach(function(cat) {
				// Create a list item for each cat
				var li = document.createElement('li');
				li.className = 'cat-list-item';
				li.innerHTML = '<li class="cat-list-item">' + cat.name + '</li>';

				// Add the item into the DOM
				$('#cat-list').append(li);
			});
		}
	};

	var catClickView = {

	};

	octopus.init();
});
