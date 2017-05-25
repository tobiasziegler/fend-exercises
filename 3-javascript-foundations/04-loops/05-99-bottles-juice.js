/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num > 0) {
    var bottle1 = num + ' bottles';
	var bottle2 = (num - 1) + ' bottles';

	if (num === 2) {
		bottle2 = (num - 1) + ' bottle';
	} else if (num === 1) {
		bottle1 = num + ' bottle';
	}

	console.log(bottle1 + ' of juice on the wall! ' + bottle1 + ' of juice! Take one down, pass it around... ' + bottle2 + ' of juice on the wall!');

    num = num - 1;
}
