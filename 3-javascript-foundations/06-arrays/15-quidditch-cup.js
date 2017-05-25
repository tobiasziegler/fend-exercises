/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

function hasEnoughPlayers(players) {
	if (players.length >= 7) {
		return true;
	} else {
		return false;
	}
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
