var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var Group = require('./group');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		origin:  [/*put in the link here*/],
	})
);

const bbStudent1 = {
  name: "Kevin",
  age: 9,
  parentEmail: "falco@mclusky.com"
}

const bbStudent2 = {
  name: "Sarah",
  age: 9,
  parentEmail: "tim@lessavyfav.com"
}

const bbStudent3 = {
  name: "Pearse",
  age: 10,
  parentEmail: "alex@dietcig.com"
}

const bbStudent4 = {
  name: "Kelly",
  age: 11,
  parentEmail: "jeff@rosenstock.com"
}

var basketball = new Group("Basketball", 11, [bbStudent1, bbStudent2, bbStudent3, bbStudent4], [])

app.get('/', function(req, res) {
	res.json(basketball);
});

app.listen(process.env.PORT || 3000, function() {
	console.log('listening on ' + this.address().port);
});
