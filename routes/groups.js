var express = require('express');
var router = express.Router();
var GroupSchema = require('../models/Schema')
var Group = require('../models/group')

router.route('/')
.get(function (req, res) {
	res.json("Hecklo")
})

router.route('/')
.post(async function (req, res) {

  var courseName = req.body.courseName;
  var capacity = req.body.capacity;
  var students = []
  var newGroup = new Group(courseName, capacity, students)

	var dbGroup = await new GroupSchema(newGroup);

	await dbGroup.save()
})

module.exports = router;
