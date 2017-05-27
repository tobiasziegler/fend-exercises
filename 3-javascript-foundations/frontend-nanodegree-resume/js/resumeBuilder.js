// Try .append() for Yourself
// $("#main").append("Tobby");

// Save and .append() Data
// var awesomeThoughts = 'I am Tobby and I am AWESOME!';
// console.log(awesomeThoughts);

// string.replace()
// var awesomeThoughts = 'I am Tobby and I am AWESOME!';
// funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log(funThoughts);

// Format Data, Build a Resume Header
var formattedName = HTMLheaderName.replace("%data%", "Tobby");
var role = 'Front-End Web Developer';
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
