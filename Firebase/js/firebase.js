// step 1: sign up for a firebase account
// step 2: make a new project
// step 3: pick make a web project
// step 4: make a file called firebase.js
// step 5: copy and paste the config stuff into firebase.js
// step 5a: make a var database = firebase.database().ref() in that same file
// step 6: copy the cdn to the bottom of the body tag
// step 6: go to the fire base console and go to database
// step 7: change rules so no auth required, change != to ==
// step 8: make a main.js file and src it at the bottom of your html
    // make sure it's firebase cdn, then firebase.js, then main.js

var config = {
    apiKey: "AIzaSyBASq-mKfQL1jB1YOx0kZAGx7EPwzl2JPk",
    authDomain: "ascpractice.firebaseapp.com",
    databaseURL: "https://ascpractice.firebaseio.com",
    storageBucket: "",
  };
firebase.initializeApp(config);

var database = firebase.database().ref();
