var sections = ['Start','Theme?','Venue?','Sponsors?','Audience?','Finished?'];
var themes = ['Social Justice', 'Data Science', 'Music'];
var audience = ['High School Students','College Students','Engineers','Business People'];

var sjVenues = ['Civic Hall','The U.N.'];
var sjSponsors = ['All Star Code','Microsoft'];
var mVenues = ['Spotify','Sony Music Entertainment'];
var mSponsors = ['Sound Cloud','Pandora'];
var dsSponsors = ['CUNY Advanced Science Research Center','Google','Goldman Sachs'];
var dsVenues = ['Flatiron School','NYU Stern'];

var venues = {'Social Justice':sjVenues,'Data Science':dsVenues,'Music':mVenues};
var sponsors = {'Social Justice':sjSponsors,'Data Science':dsSponsors,'Music':mSponsors};

var data = [themes,venues,sponsors,audience]

var sectionCounter = 0;

var myTheme;
var mySponsor;
var myVenue;
var myAudience;

var sectionHTML = document.getElementById('section');
var choicesHTML = document.getElementById('choices');


function start(){
  sectionCounter += 1;
  sectionHTML.innerHTML = sections[sectionCounter];
  choicesHTML.innerHTML = "";
  for(var i = 0; i < themes.length; i++){
    choicesHTML.innerHTML += "<p onclick='chooseTheme(" + i + ")'>" + themes[i] + "</p>";
  }
}

function chooseTheme(num){
  sectionCounter += 1;
  sectionHTML.innerHTML = sections[sectionCounter];
  console.log(num);
  myTheme = themes[num];
  choicesHTML.innerHTML = "";
  for(var i = 0; i < venues[myTheme].length; i++){
    choicesHTML.innerHTML += "<p onclick='chooseVenue(" + i + ")'>" + venues[myTheme][i] + "</p>";
  }
}

function chooseVenue(num){
  sectionCounter += 1;
  sectionHTML.innerHTML = sections[sectionCounter];
  console.log(num);
  myVenue = venues[myTheme][num];
  choicesHTML.innerHTML = "";
  for(var i = 0; i < sponsors[myTheme].length; i++){
    choicesHTML.innerHTML += "<p onclick='chooseSponsor(" + i + ")'>" + sponsors[myTheme][i] + "</p>";
  }
}

function chooseSponsor(num){
  sectionCounter += 1;
  sectionHTML.innerHTML = sections[sectionCounter];
  console.log(num);
  mySponsor = sponsors[myTheme][num];
  choicesHTML.innerHTML = "";
  for(var i = 0; i < audience.length; i++){
    choicesHTML.innerHTML += "<p onclick='chooseAudience(" + i + ")'>" + audience[i] + "</p>";
  }
}

function chooseAudience(num){
  sectionCounter += 1;
  sectionHTML.innerHTML = sections[sectionCounter];
  console.log(num);
  myAudience = audience[num];
  choicesHTML.innerHTML = "";
  choicesHTML.innerHTML += "Your throwing a " + myTheme + " themed hackathon!<br>";
  choicesHTML.innerHTML += "The venue is " + myVenue + "<br>";
  choicesHTML.innerHTML += "The main sponsor is " + mySponsor + "<br>";
  choicesHTML.innerHTML += "Your main audience is " + myAudience;
}
