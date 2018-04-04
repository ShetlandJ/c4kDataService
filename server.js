var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
	cors({
		origin:  [/*put in the link here*/],
	})
);

app.get('/classes', function(req, res) {
	res.json("Hello world");
});

app.listen(process.env.PORT || 3000, function() {
	console.log('listening on ' + this.address().port);
});
