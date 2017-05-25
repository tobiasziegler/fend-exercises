/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
	var output = '';
	for (var i = 0; i < num; i++) {
		output += 'ha';
	}
	output += '!';
	return output;
}

console.log(laugh(10));
