
var bio = {};
var work = {};
var education = {};
var projects = {};


bio["name"] = "Patrick Mahoney";
bio["role"] = "Front-End Ninja";
bio["contacts"] = {
  "mobile": "804-922-6770",
  "email": "pmahoney78@gmail.com",
  "github": "Patological",
  "twitter": "@Patological",
  "location": "Midlothian, VA"
}
bio["welcomeMessage"] = "FEAST YOUR EYES!!!";
bio["skills"] = [
  "Leading", "Programming", 
  "Counting", "Eating"
]
bio["bioPic"] = "images/kevinspacey.jpeg";

education["schools"] = [
  {
    "name": "Virginia Tech",
    "location": "Blacksburg, VA",
    "degree": "B.S.",
    "majors": ["Human Resources"],
    "dates": 2009,
    "url": "virginiatech.edu"
  },
  {
    "name": "VCU",
    "location": "Richmond, VA",
    "degree": "Masters",
    "majors": ["Business Administration"],
    "dates": 2011,
    "url": "vcu.edu"
  }
]
education["onlineCourses"] = [
  {
    "title": "JavaScript Basics & Front-End Web Development",
    "location": "Interwebs",
    "school" : "Udacity",
    "dates": 2015,
    "url": "http://www.udacity.com"
  }
]
work["jobs"] = [
  {
    "employer": "Capital One",
    "title": "E-SCRA Sr. Coordinator",
    "location": "Richmond, VA",
    "dates": "May, 2014 - Present",
    "description": "Ensure active military personnel that have accounts with capitalone receive the benefits they are due by law."
  },
  {
    "employer": "Capital One",
    "title": "Fraud Recovery Coordinator",
    "location": "Richmond, VA",
    "dates": "November, 2011 - May, 2014",
    "description": "Investigated credit card fraud claims for legitimacy and financial recovery."
  }
]

/*function locationizer(work_obj){
  var locationArray = [];
  for (job in work_obj.jobs) {
    var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}
console.log(locationizer(work));
*/

projects["projects"] = [
  {
    "title": "Udacity Mug Website",
    "dates": "December, 2014",
    "description": "I drank caffeine, a lot, and eventually replicated a pdf file into an HTML/CSS website.",
    "images": ["images/mug.png"]
  },
  {
    "title": "Interactive Resume",
    "dates": "February, 2014",
    "description": "I drank caffeine, a lot, and eventually made a website to display my skilz.",
    "images": ["images/success.jpeg"]
  }
]


bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#topContacts").append(formattedContact);
  }

  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedPic);

  var formattedDescription = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedDescription);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
  }

  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }

  for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#footerContacts").append(formattedContact);
  }

}

work.display = function() {
  for (job in work.jobs) {

    $("#workExperience").append(HTMLworkStart);
    
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLworkEmployer.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLworkTitle.replace("%data%", education.schools[school].degree);
    var formattedSchoolHeader = formattedSchoolName + formattedDegree;
    $(".education-entry:last").append(formattedSchoolHeader);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    for (major in education.schools[school].majors) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedMajor);
    }
  }
  
  $("#education").append(HTMLonlineClasses);

  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    var formattedOnlineHeader  = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedOnlineHeader);
    
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);
  }
}

bio.display();
work.display();
education.display();
projects.display();


function inName(_name) {
  var name;
  if (_name) {
    name = _name;
  } else {
    name = bio.name;
  }
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);