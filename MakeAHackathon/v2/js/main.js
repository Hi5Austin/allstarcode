var sections = ['Pick a Theme','Get a Venue','Get Sponsors','Pick an Audience'];
var themes = ['Social Justice', 'Data Science', 'Music'];
var themePics = ['http://i2.cdn.turner.com/cnnnext/dam/assets/140105194513-african-migrant-protest-story-top.jpg','http://www.healthcareitnews.com/sites/default/files/Artificial%20Intelligence-HITN.png','http://cdn.playbuzz.com/cdn/74c9d235-367c-4884-b768-2784142834f2/9768c4c4-649e-4e5d-be1f-02983cf9247f.jpg'];
var audience = ['Marketers','Students','Engineers'];
var audiencePics = ['http://www.legalproductivity.com/wp-content/uploads/2016/01/law-firm-marketing-tools.jpg','http://www.napavalley.edu/President/BIRT/PublishingImages/diverse.jpg','http://api.ning.com/files/gLRz0qCeA0VjBQTljc9n*8UMRVfGNEhcaeDPYTnkgK6RsNdI85n7gyuMk42yELDbQd27WX6oVwGU2f*RjwiDCCc*KLnDizh-/shutterstock_150121115.jpg'];

var sjVenues = ['Civic Hall','The U.N.'];
var sjVImages = ['https://pbs.twimg.com/profile_images/530450919695978496/r8V3K8wc.png','https://pbs.twimg.com/profile_images/538328216729968642/SdfeQXSM.png'];

var sjSponsors = ['All Star Code','Microsoft'];
var sjSImages = ['https://cmfernandocabrera.files.wordpress.com/2015/03/all-star-code-logo.jpeg','https://pbs.twimg.com/profile_images/709852306632744960/zQ0xyGGK.jpg'];

var mVenues = ['Spotify','Sony Music Entertainment'];
var mVImages = ['https://pbs.twimg.com/profile_images/753188521540714497/ge3tfN8Z.jpg','http://www.almostfreebeats.com/wp-content/uploads/2012/01/sony-music-entertainment.jpg'];

var mSponsors = ['Sound Cloud','Pandora'];
var mSImages = ['https://index.tnwcdn.com/images/3d3850690c8e32eff1f17e3e3480c6cac3adf49b.png','http://digital.relevance.com/hs-fs/hub/207886/file-935826629-jpg/blog-files/pandora-radio.jpg'];

var dsSponsors = ['CUNY ASRC','Google','    Two Sigma'];
var dsSImages = ['https://pbs.twimg.com/profile_images/619220965654941699/U0odwzQy.png','https://pbs.twimg.com/profile_images/657703841085935616/EulXOwHD.png','https://relishcaterers.files.wordpress.com/2015/06/two-sigma.png?w=676'];

var dsVenues = ['Flatiron School','NYU Stern'];
var dsVImages = ['http://fund.lipen.co/images/falt.jpg','http://www.fortefoundation.org/images/content/pagebuilder/stern_stacked.png'];

var venues = {'Social Justice':sjVenues,'Data Science':dsVenues,'Music':mVenues};
var sponsors = {'Social Justice':sjSponsors,'Data Science':dsSponsors,'Music':mSponsors};

var venuePics = {'Social Justice':sjVImages,'Data Science':dsVImages,'Music':mVImages};
var sponsorPics = {'Social Justice':sjSImages,'Data Science':dsSImages,'Music':mSImages};

var data = [themes,venues,sponsors,audience]
var picData = [themePics,venues,sponsors,audiencePics];
var myData = [];

var sectionCounter = 0;

var section;
var currentData;

var sectionHTML = $('#section');
var choicesHTML = $('#choices');

var htmlData = [];
function changeSection(){
  section = sections[sectionCounter];
  sectionHTML.text(section);
  choicesHTML.html("");
  currentData = data[sectionCounter];
  currentPictures = picData[sectionCounter];
  console.log(currentData);
  for(var i = 0; i < currentData.length; i++){
    choicesHTML.append("<a class='choice button'>" + currentData[i] + "<a>");
  }
  choicesHTML.append('<br><br>');
  for(var i = 0; i < currentData.length; i++){
    choicesHTML.append("<img class='dataImage' src='" + currentPictures[i] + "'>");
  }
  // choicesHTML.append("<br><br>");
  //  for(var i = 0; i < currentData.length; i++){
  //    choicesHTML.append("<a class='description'>" + "Data" + "<a>");
  // }
  // choicesHTML.append("<br>");
  // for(var i = 0; i < currentData.length; i++){
  //   choicesHTML.append("<a class='description'>" + "Data" + "<a>");
  // }
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
    picData[1] = venuePics[myData[0]];
    picData[2] = sponsorPics[myData[0]];
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
