function test(){
  var name = $("#name").val();
  $.ajax({
    url:'http://www.omdbapi.com/?t=' + name,
    success:function(result){
      print(result);
    }
  })
}

function print(obj){
  $('#content').text('');
  for(var prop in obj){
    if(obj.hasOwnProperty(prop)){
      $('#content').append('<p>' + prop + ': ' + obj[prop] +'</p>');
    }
  }
}

$('#submit').click(function(){
  test();
})
