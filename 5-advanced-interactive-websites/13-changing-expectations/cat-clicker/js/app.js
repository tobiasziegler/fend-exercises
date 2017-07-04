var clicks = [0, 0];
var names = ['Xuxa the Kitten', 'Dramatic Kitten'];

function updateTracker(cat) {
	var tracker;
	switch(cat) {
		case 0:
			tracker = '#click-tracker-1';
			break;
		case 1:
			tracker = '#click-tracker-2';
			break;
	}
	$(tracker).text('Number of clicks for ' + names[cat] + ': ' + clicks[cat]);
}

// Record a click and update the tracker for cat 1
$('#cat1').click(function(e) {
	clicks[0]++;
	updateTracker(0);
});

// Record a click and update the tracker for cat 2
$('#cat2').click(function(e) {
	clicks[1]++;
	updateTracker(1);
});

// Replace the placeholder text with click tracking when page is loaded
$(document).ready(function(e) {
	updateTracker(0);
	updateTracker(1);
})
