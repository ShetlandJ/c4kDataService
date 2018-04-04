var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var Group = require('./models/group');
var Student = require('./models/student');

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		origin:  [/*put in the link here*/],
	})
);

app.get('/', function(req, res) {
	res.redirect('/all');
});

app.get('/all', function(req, res) {
	res.json(Group);
});

app.listen(process.env.PORT || 3000, function() {
	console.log('listening on ' + this.address().port);
});
