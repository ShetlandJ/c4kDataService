var assert = require("assert");
var Group = require("../group.js");
var Student = require("../student.js");
var Queue = require("../queue.js");


describe( "Group class tests", function(){
  var group;

  beforeEach(function(){

    var student1 = new Student("Kevin", 9, "foo@bar.com")
    var student2 = new Student("Kathleen", 10, "baz@bar.com")
    var student3 = new Student("Sarah", 11, "biz@foo.com")
    var student4 = new Student("Pearse", 9, "joe@bloggs.com")

    var students = [student1, student2, student3, student4]

    var waitingList = []

    group = new Group("Basketball", 11, students, waitingList)
  });

  it("should have a course name", function(){
    assert.strictEqual(group.courseName, "Basketball");
  });

  it("should have a student capacity", function(){
    assert.strictEqual(group.capacity, 11);
  });


  it("should have four students", function(){
    assert.deepStrictEqual(group.students.length, 4);
  });
})
