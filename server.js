const express = require('express');
const app = express();
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
app.listen(process.env.PORT || 8080);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/download/request', function (req, res) {
  res.json(data.configurations.slice(0, req.query.host));
});