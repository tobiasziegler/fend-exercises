/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
	var output = '';
	x % 3 === 0 ? x % 5 === 0 ? output = 'JuliaJames' : output = 'Julia' : x % 5 === 0 ?  output = 'James' : output = x;
	console.log(output);
    x = x + 1;
}
