var sections = ['Pick a Theme','Get a Venue','Get Sponsors','Pick an Audience'];
var themes = ['Social Justice', 'Data Science', 'Music'];
var audience = ['Big Companies','Colleges','Startups'];

var sjVenues = ['Civic Hall','The U.N.'];
var sjSponsors = ['All Star Code','Microsoft'];
var mVenues = ['Spotify','Sony Music Entertainment'];
var mSponsors = ['Sound Cloud','Pandora'];
var dsSponsors = ['CUNY Advanced Science Research Center','Google','Goldman Sachs'];
var dsVenues = ['Flatiron School','NYU Stern'];

var venues = {'Social Justice':sjVenues,'Data Science':dsVenues,'Music':mVenues};
var sponsors = {'Social Justice':sjSponsors,'Data Science':dsSponsors,'Music':mSponsors};

var data = [themes,venues,sponsors,audience]
var myData = [];

var sectionCounter = 0;

var section;
var currentData;

var sectionHTML = $('#section');
var choicesHTML = $('#choices');

function changeSection(){
  section = sections[sectionCounter];
  sectionHTML.text(section);
  choicesHTML.text("");
  currentData = data[sectionCounter];
  for(var i = 0; i < currentData.length; i++){
    choicesHTML.append("<a class='choice button'>" + currentData[i] + "<a>");
  }
  choicesHTML.append("<br><br>");
  for(var i = 0; i < currentData.length; i++){
    choicesHTML.append("<a class='description'>" + currentData[i] + "<a>");
  }
  choicesHTML.append("<br>");
  for(var i = 0; i < currentData.length; i++){
    choicesHTML.append("<a class='description'>" + currentData[i] + "<a>");
  }
  $('.choice').on('click',function(){
     myData.push(this.innerHTML);
     checkData();
     if(myData.length == 4){
       finish();
     }
     else{
       changeSection();
     }
   })
  sectionCounter += 1;
}

function checkData(){
  if(myData[0] != null){
    data[1] = venues[myData[0]];
    data[2] = sponsors[myData[0]];
  }
}

function finish(){
  sectionHTML.text("Finished");
  choicesHTML.text("");
  choicesHTML.append("You're throwing a " + myData[0] + " themed hackathon");
  choicesHTML.append(" at " + myData[1] + "<br><br>");
  choicesHTML.append("The main sponsor is " + myData[2]);
  choicesHTML.append(" and the main audience is " + myData[3]);

}

//to do list
//design
//swag, food
//prizes, judge
//marketing(email list/social media, eventbrite)
//
