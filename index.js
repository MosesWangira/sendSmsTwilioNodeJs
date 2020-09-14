// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'xxxxxxxxxxx';
const authToken = 'xxxxxxxxxx';
const client = require('twilio')(accountSid, authToken);

var random = Math.floor(100000 + Math.random() * 900000);
client.messages
  .create({
     body: random,
     from: '+12058513386',
     to: '+254770628831'
   })
  .then(message => console.log(message.sid));
