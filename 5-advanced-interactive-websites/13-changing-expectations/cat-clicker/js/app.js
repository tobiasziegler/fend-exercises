var clicks = 0;

function updateTracker() {
	$('#click-tracker').text('Number of clicks: ' + clicks);
}

// Record a click and update the tracker
$('#cat').click(function(e) {
	clicks++;
	updateTracker();
});

// Replace the placeholder text with click tracking when page is loaded
$(document).ready(function(e) {
	updateTracker();
})
