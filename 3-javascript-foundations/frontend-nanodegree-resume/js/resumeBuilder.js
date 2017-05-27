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
			"title": "Policy and Legislation Advisor",
			"employer": "Jan Barham MLC, Parliament of NSW",
			"years": "2012-2017",
			"location": "Sydney, NSW, Australia",
			"description": "Quisque consequat semper risus, et pharetra orci ullamcorper eu. Aliquam pretium libero ac velit tempus, ac vestibulum purus accumsan. Quisque imperdiet arcu elit, nec ullamcorper risus efficitur sed. Donec venenatis consectetur dolor, vitae molestie libero blandit sit amet. Cras ultrices finibus congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec bibendum mi eros, vitae lacinia lectus ornare at. In ut ipsum semper, efficitur risus ultricies, luctus erat. Donec consequat sodales metus, non cursus sapien lacinia vel. Ut pellentesque augue metus, quis pharetra odio pulvinar ut. Cras rutrum mi sed nibh facilisis, vel vulputate erat semper. Sed eu maximus urna, eget sagittis quam."
		},
		{
			"title": "Senior Lecturer in Psychology",
			"employer": "Charles Sturt University",
			"years": "2006-2012",
			"location": "Bathurst, NSW, Australia",
			"description": "Quisque consequat semper risus, et pharetra orci ullamcorper eu. Aliquam pretium libero ac velit tempus, ac vestibulum purus accumsan. Quisque imperdiet arcu elit, nec ullamcorper risus efficitur sed. Donec venenatis consectetur dolor, vitae molestie libero blandit sit amet. Cras ultrices finibus congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec bibendum mi eros, vitae lacinia lectus ornare at. In ut ipsum semper, efficitur risus ultricies, luctus erat. Donec consequat sodales metus, non cursus sapien lacinia vel. Ut pellentesque augue metus, quis pharetra odio pulvinar ut. Cras rutrum mi sed nibh facilisis, vel vulputate erat semper. Sed eu maximus urna, eget sagittis quam."
		},
		{
			"title": "Lecturer in Psychology",
			"employer": "Charles Sturt University",
			"years": "2002-2005",
			"location": "Bathurst, NSW, Australia",
			"description": "Quisque consequat semper risus, et pharetra orci ullamcorper eu. Aliquam pretium libero ac velit tempus, ac vestibulum purus accumsan. Quisque imperdiet arcu elit, nec ullamcorper risus efficitur sed. Donec venenatis consectetur dolor, vitae molestie libero blandit sit amet. Cras ultrices finibus congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec bibendum mi eros, vitae lacinia lectus ornare at. In ut ipsum semper, efficitur risus ultricies, luctus erat. Donec consequat sodales metus, non cursus sapien lacinia vel. Ut pellentesque augue metus, quis pharetra odio pulvinar ut. Cras rutrum mi sed nibh facilisis, vel vulputate erat semper. Sed eu maximus urna, eget sagittis quam."
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

// If Statements
// Note that the header doesn't display at all unless the name has been displayed
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
	$("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
}

// For-In Loops
// for (job in work.jobs) {
	// $("#workExperience").append(HTMLworkStart);
	// var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	// var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	// $(".work-entry:last").append(formattedEmployer + formattedTitle);
	// $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].years));
	// $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
	// $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
// }

// Functions
function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].years));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
}

displayWork();

// Collecting Click Locations

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});
