function sms(){
  var message = $('#message').val();
  var payload = {'value1':message};
  $.post('https://maker.ifttt.com/trigger/hello/with/key/mCzrijYm1QEdIQIFIhEPiJeeV_-ILKWopP7WqLT3RwT',
  payload);
}
