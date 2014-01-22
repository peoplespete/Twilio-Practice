/* global document, window, io */

$(document).ready(initialize);

var socket;

function initialize(){
  $(document).foundation();
  initializeSocketIO();

  $('#message').hide();
  $('#send').hide();
  $('#text').on('click', clickText);
  $('#call').on('click', clickCall);
  $('#send').on('click', clickSend);

}
var to = "";
var isText = false;

function clickText(){
  to = String(getValue('#to'));
  $('#message').show().focus();
  isText = true;

  $('#to').hide();
  $('#call').hide();
  $('#text').hide();
  $('#send').show();

}

function clickCall(){
  to = String(getValue('#to'));
  window.open("http://twimlbin.com/82f17b4e");

  $('#to').hide();
  $('#call').hide();
  $('#text').hide();
  $('#send').show();

}

function clickSend(){

  // console.log($(this).attr('id'));
  // var isText = $(this).attr('id') == 'sendText';
  // console.log(isText);
  // $('#to').placeholder = "Type recipient phone number here"
  // // console.log(to);
  // if(isText){
  //   $('#message').show();
  // }else{
  //   window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  //   window.open("http://twimlbin.com/82f17b4e");
  // }

  var text = getValue('#message');
  var message = {};
  message.to = to;
  message.text = text;
  message.isText = isText;
  sendAjaxRequest('/', message, 'post', null, null, function(data){
    // console.log('success');
    console.log(data);

  });
}



function initializeSocketIO(){
  var port = window.location.port ? window.location.port : '80';
  var url = window.location.protocol + '//' + window.location.hostname + ':' + port + '/app';

  socket = io.connect(url);
  socket.on('connected', socketConnected);
}

function socketConnected(data){
  // console.log(data);
}
