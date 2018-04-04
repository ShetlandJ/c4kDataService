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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		origin:  [/*put in the link here*/],
	})
);

const dbUsername = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

// mongoose.Promise = global.Promise;
// const mongoUri = `mongodb://${dbUsername}:${dbPassword}@ds135179.mlab.com:35179/c4k`
// mongoose.connect(mongoUri);

app.use('/', router);

router.route('/')
.get(function (req, res) {
	res.json("Hello")
})


// app.get('/', function(req, res) {
// 	res.redirect('/all');
// });
//
// app.get('/all', function(req, res) {
// 	res.json(Group);
// });
//
// app.post('/:group/addStudent', async (req, res) => {
// 	const group = await User.findOne({
// 		'name': name
// 	});
//
// })







app.listen(process.env.PORT || 3000, function() {
	console.log('listening on ' + this.address().port);
});
