var express = require('express');
var router = express.Router();
var Group = require('../models/group')
var Student = require('../models/student')

router.route('/')
.get(function (req, res) {
  res.json("hello world")
})

router.route('/all')
.get(async function (req, res) {
  res.json(groups)
})

router.route('/:groupName/details')
.get(function (req, res) {

  var group = groups.find( group => group.courseName === req.params.groupName)

  if (group) {
    res.json(group)
  } else {
    return res.status(403).send({
      error: "Group not found."
    })
  }
})

router.route('/:groupName/student')
.post(function (req, res) {

  var group = groups.find( group => group.courseName === req.params.groupName)

  if (group) {

    var studentName = req.body.studentName;
    var studentAge = req.body.studentAge;
    var parentEmail = req.body.parentEmail

    var newStudent = new Student(studentName, studentAge, parentEmail);

    group.addStudent(newStudent)
    res.json(group)
  } else {
    return res.status(403).send({
      error: "Group not found."
    })
  }
})

router.route('/:groupName/:studentName')
.delete(function (req, res) {

  var group = groups.find( group => group.courseName === req.params.groupName)

  if (group) {

    var studentName = req.body.studentName;
    var studentAge = req.body.studentAge;
    var parentEmail = req.body.parentEmail

    var newStudent = new Student(studentName, studentAge, parentEmail);

    group.removeStudent(newStudent)
    res.json(group)
  } else {
    return res.status(403).send({
      error: "Group not found."
    })
  }
})

var student1 = new Student("Kevin", 9, "foo@bar.com")
var student2 = new Student("Kathleen", 10, "baz@bar.com")
var student3 = new Student("Sarah", 11, "biz@foo.com")
var student4 = new Student("Pearse", 9, "joe@bloggs.com")

var students = [student1, student2, student3, student4]

var group1 = new Group("basketball", 11, students)
var group2 = new Group("table_tennis", 2, [student1, student2])

var groups = [group1, group2]

var result = groups.find( group => group.courseName === 'table_tennis')

module.exports = router;
