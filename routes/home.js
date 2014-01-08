  var accountSid = 'ACe102f97b9927d694c8e193a0bac373b5';
  var authToken = "8af4e625da13075e03e732796fdafdc3";
  var client = require('twilio')(accountSid, authToken);
// var twilio = require('twilio-node/lib');
// Get /
exports.index = function(req, res){
  res.render('home/index', {title: 'Express'});
};



// Post /
exports.sendText = function(req, res){
  console.log(req.body);
//Send an text message
  var msg = {
    to: '+13369262268',
    from: '+13362454476',
    body: req.body.text
  };
  client.sendMessage(msg, function(err, responseData) { //this function is executed when a response is received from Twilio
    if (!err) { // "err" is an error received during the request, if any
        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1
        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."
        res.send(responseData);
      }
      else{
        res.send({'status':'error'})
      }

    });



  // client.sms.messages.create({
  //     body: "Jenny please?! I love you <3",
  //     to: "+13369262268",
  //     from: "+13362454476"
  // }, function(err, message) {
  //     process.stdout.write(message.sid);
  //     res.send({});
  // });

};