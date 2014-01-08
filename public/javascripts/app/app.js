/* global document, window, io */

$(document).ready(initialize);

var socket;

function initialize(){
  $(document).foundation();
  initializeSocketIO();
  $('#sendText').on('click', clickSendText);




}

function clickSendText(){
// function sendAjaxRequest(url, data, verb, altVerb, event, successFn){
// function getValue(selector, fn){
  var text = getValue('#message');
  console.log(text);
  var message = {};
  message.text = text;
  sendAjaxRequest('/', message, 'post', null, null, function(data){
    console.log('success');
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
  console.log(data);
}