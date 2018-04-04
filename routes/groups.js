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

router.route('/:groupName')
.get(async function (req, res) {

  const group = await GroupSchema.findOne({
    'courseName': req.params.groupName
  });

  if (!group) {

    return res.status(403).send({
      success: false
    });

  }


  if (group)
  return res.status(201).send({
    success: true
  })
})


module.exports = router;
