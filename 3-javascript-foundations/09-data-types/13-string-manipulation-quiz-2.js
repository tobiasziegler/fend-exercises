var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;

	var names = finalName.split(' ');
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	names[1] = names[1].toUpperCase();
	finalName = names.join(' ');

    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
