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
// var bio = {
	// name: "David Mallard",
	// role: "Front-End Web Developer",
	// contacts: {
		// "mobile": "0432-881-448",
		// "email": "correspondence@davidmallard.id.au",
		// "github": "tobiasziegler",
		// "twitter": "@tobiasziegler",
		// "location": "Orange, NSW, Australia"
	// },
	// welcomeMsg: "G\'day, people",
	// bioPic: "images/tobby.png",
	// skills: [
		// "web development",
		// "user experience design",
		// "content strategy"
	// ]
// };
//
// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
// var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
// var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
// var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
// var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
// var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
// var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
// var formattedSkills0 = HTMLskills.replace("%data%", bio.skills[0]);
// var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[1]);
// var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[2]);
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
// $("#topContacts").append(formattedMobile);
// $("#topContacts").append(formattedEmail);
// $("#topContacts").append(formattedGithub);
// $("#topContacts").append(formattedTwitter);
// $("#topContacts").append(formattedLocation);
// $("#footerContacts").append(formattedMobile);
// $("#footerContacts").append(formattedEmail);
// $("#footerContacts").append(formattedGithub);
// $("#footerContacts").append(formattedTwitter);
// $("#footerContacts").append(formattedLocation);
// $("#header").append(formattedBioPic);
// $("#header").append(formattedWelcomeMsg);
// $("#header").append(HTMLskillsStart);
// $("#skills").append(formattedSkills0);
// $("#skills").append(formattedSkills1);
// $("#skills").append(formattedSkills2);

// Practice with Objects
// var work = {};
// work.position = "Policy and Legislation Advisor";
// work.employer = "Jan Barham MLC, Parliament of NSW";
// work.years = "2012-2017";
// work.city = "Sydney";
//
// var education = {};
// education["school"] = "University of New England";
// education["degree"] = "Graduate Diploma of Legal Studies";
// education["years"] = "2007-2009";
// education["city"] = "Distance Education";
//
// $("#workExperience").append(HTMLworkStart);
// $(".work-entry").append(HTMLworkEmployer.replace("%data%", work["employer"]) + HTMLworkTitle.replace("%data%", work["position"]));
// $(".work-entry").append(HTMLworkDates.replace("%data%", work["years"]));
// $(".work-entry").append(HTMLworkLocation.replace("%data%", work["city"]));
//
// $("#education").append(HTMLschoolStart);
// $(".education-entry").append(HTMLschoolName.replace("%data%", education.school) + HTMLschoolDegree.replace("%data%", education.degree));
// $(".education-entry").append(HTMLschoolDates.replace("%data%", education.years));
// $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.city));

// Validating JSON
// var education = {
	// "schools": [
		// {
			// "name": "University of New England",
			// "location": "Distance Education",
			// "degree": "Graduate Diploma of Legal Studies",
			// "dates": "2007-2009"
		// },
		// {
			// "name": "University of New South Wales",
			// "location": "Sydney, NSW, Australia",
			// "degree": "Doctor of Philosophy",
			// "dates": "1998-2002"
		// },
		// {
			// "name": "University of New South Wales",
			// "location": "Sydney, NSW, Australia",
			// "degree": "Bachelor of Science (Psychology) (Honours)",
			// "dates": "1993-1996"
		// }
	// ],
	// "onlineCourses": [
		// {
			// "title": "Front-End Web Developer Nanodegree",
			// "school": "Udacity",
			// "dates": 2017,
			// "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		// }
	// ]
// };

// All the Resume Sections
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

var education = {
	"schools": [
		{
			"name": "University of New England",
			"location": "Distance Education",
			"degree": "Graduate Diploma of Legal Studies",
			"dates": "2007-2009"
		},
		{
			"name": "University of New South Wales",
			"location": "Sydney, NSW, Australia",
			"degree": "Doctor of Philosophy",
			"dates": "1998-2002"
		},
		{
			"name": "University of New South Wales",
			"location": "Sydney, NSW, Australia",
			"degree": "Bachelor of Science (Psychology) (Honours)",
			"dates": "1993-1996"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2017",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

var work = {
	"jobs": [
		{
			"position": "Policy and Legislation Advisor",
			"employer": "Jan Barham MLC, Parliament of NSW",
			"years": "2012-2017",
			"location": "Sydney, NSW, Australia"
		},
		{
			"position": "Senior Lecturer in Psychology",
			"employer": "Charles Sturt University",
			"years": "2006-2012",
			"location": "Bathurst, NSW, Australia"
		},
		{
			"position": "Lecturer in Psychology",
			"employer": "Charles Sturt University",
			"years": "2002-2005",
			"location": "Bathurst, NSW, Australia"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Fund Our Libraries",
			"dates": "2013-2014"
		},
		{
			"title": "Climate Action NSW",
			"dates": "2015-2016"
		},
		{
			"title": "Saving Our Forests",
			"dates": "2016-2017"
		}
	]
};
