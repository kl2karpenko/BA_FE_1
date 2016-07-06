var
	express = require('express'),
	path    = require('path'),
	_       = require('underscore');

var app = express();
var port = 8030;



app.get('*', function (req, res) {
	res.sendfile('index.html');
});

app.listen(port, "0.0.0.0");

console.log('server has been started on localhost:' + port);