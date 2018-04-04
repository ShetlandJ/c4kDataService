var express = require('express');
var router = express.Router();

router.route('/')
.get(function (req, res) {
	res.json("Hecklo")
})

router.route('/')
.post(async function (req, res) {
	result.value.password = hash;

	var newUser = await new User(result.value);

	await newUser.save()
})

module.exports = router;
