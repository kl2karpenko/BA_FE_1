var
	express = require('express'),
	path = require('path');

var app = express();
var port = 8088;

var phones = [
	{
		"name": "Lily",
		"number": "3454355"
	},
	{
		"name": "Lily",
		"number": "3454366"
	}
];

var root = path.resolve(__dirname, 'example');

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
};

app.configure(function () {
	app.use(express.static(root));
	app.use(express.bodyParser());
	app.use(express.logger('dev'));
	app.use(allowCrossDomain);
	app.use(app.router);
});

app.get('/phones', function (req, res) {
	res.send(phones);
});

app.post('/phones', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	//phones = req.body;
	console.log(req.body, res.body);

	res.send({
		"body": req.body
	});
});

app.put('/phones', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	//phones = req.body;
	console.log(req.body, res.body);

	res.send(req.body);
});

app.get('*', function (req, res) {
	res.sendfile('example/index.html');
});

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.listen(port, "0.0.0.0");

console.log('server has been started on localhost:' + port);
