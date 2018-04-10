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
