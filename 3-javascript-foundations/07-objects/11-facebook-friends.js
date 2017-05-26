/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
	name: "David Mallard",
	friends: 0,
	messages: ['g\'day', 'yo', 'hi'],
	postMessage: function(message) {
		facebookProfile.messages.push(message);
	},
	deleteMessage: function(index) {
		facebookProfile.messages.splice(index, 1);
	},
	addFriend: function() {
		++facebookProfile.friends;
	},
	removeFriend: function() {
		--facebookProfile.friends;
	}
};
