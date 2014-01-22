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
    to: req.body.to,
    from: '+13362454476',
    body: req.body.text
  };
  var isText = String(req.body.isText) == 'true';
  if(isText){
    console.log('you are texting...');
    client.sendMessage(msg, function(err, responseData) { //this function is executed when a response is received from Twilio
      if (!err) { // "err" is an error received during the request, if any
          res.send(responseData);
        }
        else{
          res.send({'status':'error'});
        }
        // NO RESPONSE BEING SENT HERE!?!  It will send the text in the real world but no callback
      });
      res.send({}); //this should be removed once callback not firing is resolved
  }else{
      console.log('you are calling...');
      client.calls.create({
          to: req.body.to,
          from: '+13362454476',
          url: "http://twimlbin.com/external/c72a1968f6f629bf" // A URL that produces an XML document (TwiML) which contains instructions for the call
      }, function(err, responseData) {
          console.log(err);
          res.send(responseData);
      });
  }
};
