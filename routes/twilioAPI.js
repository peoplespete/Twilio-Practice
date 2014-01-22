// CANNOT FOR THE LIFE OF ME GET THIS TO WORK!!!!

var accountSid = 'ACe102f97b9927d694c8e193a0bac373b5';
var authToken = "8af4e625da13075e03e732796fdafdc3";
var express = require('express'),
    app = express();
var twilioAPI = require('twilio-api'),
    cli = new twilioAPI.Client(accountSid, authToken);
app.use(cli.middleware() );
app.listen(3000);
//Get a Twilio application and register it
// Get /
// exports.index = function(req, res){
  cli.account.getApplication("AP2a0747eba6abf96b7e3c3ff0b4530f6e", function(err, app) {
      if(err) throw err;
      app.register();
      // app.on('incomingCall', function(call) {
      //     //Use the Call object to generate TwiML
      //     call.say("This is a test. Goodbye!");
      // });
      app.makeCall("+12225551234", "+13335551234", function(err, call) {
          if(err) throw err;
          call.on('connected', function(status) {
              //Called when the caller picks up
              call.say("This is a test. Goodbye!");
          });
          call.on('ended', function(status, duration) {
              //Called when the call ends
          });
      });
  });
// };