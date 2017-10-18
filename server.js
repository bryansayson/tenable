const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const data = {
  	"configurations": [
  		{
  			"name" : "host1",
  			"hostname" : "nessus-ntp.lab.com",
  			"port" : 1241,
  			"username" : "toto"
  		},
  		{
  			"name" : "host2",
  			"hostname" : "nessus-xml.lab.com",
  			"port" : 3384,
  			"username" : "admin"
  		}
  	]
}

// Run the app by serving the static files
// in the dist directory

app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port

//Set CORS header and intercept "OPTIONS" preflight call from AngularJS
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === "OPTIONS") 
        res.send(200);
    else 
        next();
}

app.use(allowCrossDomain);

// parse application/json
app.use(bodyParser.json());

app.listen(process.env.PORT || 8080);

app.get('/download/request', function (req, res) {
  res.json(data.configurations.slice(0, req.query.host));
});

app.get('/download/all', function (req, res) {
  res.json(data.configurations);
});

app.delete('/delete/:name', function (req, res) {
  var host = data.configurations.find(function(host) {
    return host.name == req.params.name;
  });
  data.configurations.splice(data.configurations.indexOf(host), 1);
  res.json(host);
});

app.post('/add', function (req, res) {
  var newHost = req.body;
  data.configurations.push(newHost);
  res.json(newHost);
});