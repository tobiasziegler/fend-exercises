var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];

	// Here's one way I did it in a couple of lines
	newArray = _array;
	newArray[newArray.length - 1]++;

	// Here's the solution as explained in the quiz
	// newArray = _array.slice(0);
	// var lastNumber = newArray.pop();
	// newArray.push(lastNumber + 1);
	
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
