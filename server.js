'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const { credentials } = require("./credentials");

// [START gae_node_request_example]

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const { email, clientId, clientSecret, refreshToken } = credentials;

const oauth2Client = new OAuth2(
    clientId,
    clientSecret,
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
  refresh_token: refreshToken
});
const accessToken = oauth2Client.getAccessToken();

  app.post('/api/sendmail', function (req, res) {
  let transporter = nodeMailer.createTransport({
    'service': 'gmail',
    'auth': {
      type: "OAuth2",
      user: email,
      clientId: clientId,
      clientSecret: clientSecret,
      refreshToken: refreshToken,
      accessToken: accessToken
    }
  });

  let title = 'A message from ' + req.body.name;
  let message = 'Message: ' + req.body.message + '<br />' + "From: " + req.body.message;

  let mailOptions = {
    // should be replaced with real recipient's account
    to: 'calmiday@gmail.com',
    subject: title,
    generateTextFromHTML: true,
    html: "<p>" + message + "</p>"
  };

  console.log('sending mail: ', mailOptions);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({"success": false});
      console.log(error);
    } else {
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.json({"success": true});
    }
  });
  res.end();
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;