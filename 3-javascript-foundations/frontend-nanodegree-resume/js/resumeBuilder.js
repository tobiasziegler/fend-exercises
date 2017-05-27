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
// var formattedName = HTMLheaderName.replace("%data%", "Tobby");
// var role = 'Front-End Web Developer';
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// Biography Quiz
var bio = {
	name: "David Mallard",
	role: "Front-End Web Developer",
	contacts: {
		"mobile": "0432-881-448",
		"email": "correspondence@davidmallard.id.au",
		"github": "tobiasziegler",
		"twitter": "@tobiasziegler",
		"location": "Orange, NSW, Australia"
	},
	welcomeMsg: "G\'day, people",
	bioPic: "images/tobby.png",
	skills: [
		"web development",
		"user experience design",
		"content strategy"
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedSkills0 = HTMLskills.replace("%data%", bio.skills[0]);
var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[2]);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills0);
$("#skills").append(formattedSkills1);
$("#skills").append(formattedSkills2);
