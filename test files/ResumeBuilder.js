/*var name = "Patrick Mahoney"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

*/


var bio = {
  "name" : "Patrick Mahoney",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "804-922-6770",
    "email" : "pat@gmail.com",
    "location" : "Richmond, VA"
},
  "welcomeMessage" : "Hello World",
  "skills" : [
  "Leading", "Programming", "Counting", "Eating"
],
  "bioPic" : "images/kevinspacey.jpeg"
};


var education = {
  "schools" : [
    {
      "name": "Virginia Tech",
      "city": "Blacksburg, VA",
      "degree": "BS",
      "major": ["Human Resources Management", "E.I.T."]
    },
    {
      "name": "VCU",
      "city": "Richmond, VA",
      "degree": "Masters",
      "major": ["Business Administration"]
    }
  ]
}

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
projects["projects"] = [
  {
    "title": "Udacity Mug Website",
    "dates": "December, 2014",
    "description": "I drank caffeine, a lot, and eventually replicated a pdf file into an HTML/CSS website.",
    "images": [
      "images/mug.png"
    ]   
  }
]