// make a simple messaging app, one forum for eveyrone, name and message
function sendMessage(){
  var nameHTML = document.getElementById('name');
  var name = nameHTML.value;
  var messageHTML = document.getElementById('message');
  var message = messageHTML.value;
  messageBoardHTML = document.getElementById('messageBoard');
  messageBoardHTML.innerHTML += "<p>" + name + ": " + message + "</p>";
  //send to firebase
  // database.push({
  //   'name':name,
  //   'message':message
  // });
}

$("#jq").click(function(){
  var name = $("#name").val();
  var message = $("#message").val();
  $("#messageBoard").append("<p>" + name + ": " + message);
})

// function appendMessage(name,message){
//   messageBoardHTML = document.getElementById('messageBoard');
//   messageBoardHTML.innerHTML += "<p>" + name + ": " + message + "</p>";
// }

// database.on('child_added',function(snapshot){
//   data = snapshot.val();
//   appendMessage(data.name,data.message);
// })
