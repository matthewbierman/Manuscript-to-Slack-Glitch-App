// server.js
// where your node app starts

// init project
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const sendToSlack = require('./controllers/sendToSlack')
const getIndex = (request, response)=>
{
  response.sendFile(__dirname + '/public/views/index.html');
};

app.use(bodyParser.json())

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", getIndex);

app.route('/api/sendToSlack').post(sendToSlack);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


