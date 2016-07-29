// make a simple messaging app, one forum for eveyrone, name and message
function sendMessage(){
  var name = $("#name").val();
  var message = $("#message").val();
  //send to firebase
  database.push({
    'name':name,
    'message':message
  });
}

function appendMessage(name,message){
  $("#messageBoard").append("<p>" + name + ": " + message);
}

database.on('child_added',function(snapshot){
  data = snapshot.val();
  appendMessage(data.name,data.message);
})
