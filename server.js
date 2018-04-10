var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var Group = require('./models/group');
var Student = require('./models/student');
const mongoose = require('mongoose');


require('dotenv').config()

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));

app.use(
	cors({
		origin:  ['http://localhost:8080/'],
	})
);

app.all('*', function(req, res,next) {

	/**
	* Response settings
	* @type {Object}
	*/
	var responseSettings = {
		"AccessControlAllowOrigin": req.headers.origin,
		"AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
		"AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
		"AccessControlAllowCredentials": true
	};

	/**
	* Headers
	*/
	res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
	res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
	res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
	res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

	if ('OPTIONS' == req.method) {
		res.sendStatus(200);
	}
	else {
		next();
	}
});


	var groups = require('./routes/groups')

	app.use('/', router);
	app.use('/groups', groups)

	router.route('/')
	.get(function (req, res) {
		res.json("Hello")
	})

	app.listen(process.env.PORT || 3000, function() {
		console.log('listening on ' + this.address().port);
	});

	module.exports = app;
