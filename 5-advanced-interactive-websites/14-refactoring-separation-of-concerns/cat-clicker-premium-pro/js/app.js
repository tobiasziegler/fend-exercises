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
			catClickView.init();
		},
		getCats: function() {
			return model.cats;
		},
		getCurrentCat: function() {
			return model.currentCat;
		},
		setCurrentCat: function(cat) {
			model.currentCat = cat;
		},
		countClick: function() {
			model.currentCat.clicks++;
			catClickView.render();
		}
	};

	var catListView = {
		init: function() {
			// Store the DOM element for later use and then render the items
			this.catList = $('#cat-list');
			this.render();
		},
		render: function() {
			var cats = octopus.getCats();

			// Clear any existing content or event handlers
			this.catList.empty();

			cats.forEach(function(cat) {
				// Create a list item for each cat
				var li = document.createElement('li');
				li.className = 'cat-list-item';
				li.innerHTML = '<li class="cat-list-item">' + cat.name + '</li>';

				// Add the item into the DOM
				this.catList.append(li);

				// Set up the click event handler
				$(li).click(function() {
					octopus.setCurrentCat(cat);
					catClickView.render();
				});
			}, this);
		}
	};

	var catClickView = {
		init: function() {
			//Store the DOM elements in variables for later use
			this.catName = $('#cat-name');
			this.catImg = $('#cat-img');
			this.catClicks = $('#cat-clicks');

			// If a cat has been selected, render it (note that I haven't set a
			// default so it remains empty until a cat is picked)
			if (octopus.getCurrentCat()) {
				this.render;
			}

			// Set the click event handler for the cat image
			this.catImg.click(function() {
				octopus.countClick();
				catClickView.render();
			});
		},
		render: function() {
			var cat = octopus.getCurrentCat();

			// Load up the selected cat's content
			this.catName.text(cat.name);
			this.catImg.attr('src', cat.img);
			this.catClicks.text('Number of clicks: ' + cat.clicks);
		}
	};

	octopus.init();
});
