/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 */

function laugh(num) {
	var output = '';
	for (var i = 0; i < num; i++) {
		output += 'ha';
	}
	output += '!';
	return output;
}

console.log(laugh(3));
