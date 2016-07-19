var
	express = require('express'),
	path = require('path');

var app = express();
var port = 8088;

app.configure(function () {
	app.use(express.static(path.dirname(__dirname)));
	app.use(express.bodyParser());
	app.use(express.logger('dev'));
	app.use(app.router);
});

/**
 * List of contacts from user mobile, only for development needs
 */
app.get('/contacts', function (req, res) {
	res.send([
		{
			"name": "drbfb",
			"drtftb": "r tfth"
		},
		{
			"name": "drbfb",
			"drtftb": "r tfth"
		}
	]);
});

app.get('*', function (req, res) {
	res.sendfile('index.html');
});

app.listen(port, "0.0.0.0");

console.log('server has been started on localhost:' + port);
