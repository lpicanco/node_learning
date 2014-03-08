var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello Node 2!');
});

var server = app.listen(3000, function() {
	console.log('Listening o port %d', server.address().port);
});