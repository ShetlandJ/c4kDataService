var assert = require("assert");
var Group = require("../group.js");
var Student = require("../student.js");
var Queue = require("../queue.js");


describe( "Group class tests", function(){
  var group, group2, group3;
  var student1, student2, student3, student4, student5;
  var students;

  beforeEach(function(){

    var student1 = new Student("Kevin", 9, "foo@bar.com")
    var student2 = new Student("Kathleen", 10, "baz@bar.com")
    var student3 = new Student("Sarah", 11, "biz@foo.com")
    var student4 = new Student("Pearse", 9, "joe@bloggs.com")

    var students = [student1, student2, student3, student4]

    group = new Group("Basketball", 11, students)
    group2 = new Group("Table Tennis", 2, [student1, student2])

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

  it("should have an empty waiting list", function(){
    assert.deepStrictEqual(group.waitingList.data.length, 0);
  });

  it("should be able to add a new student to the class", function(){
    var student5 = new Student("Steph", 11, "parent@parent.com")
    group.addStudent(student5)
    assert.deepStrictEqual(group.students.length, 5);
  });

  it("should be able to remove a student", function(){
    var student5 = new Student("Steph", 11, "parent@parent.com")
    group.addStudent(student5)
    assert.deepStrictEqual(group.students.length, 5);
    group.removeStudent(student5)
    assert.deepStrictEqual(group.students.length, 4);
  });

  it("should return 0 when the class is at capacity", function(){
    assert.deepStrictEqual(group2.remainingClassSpace(), 0);
  });

  it("should not be able to add a student to the class if the class if full, and the student should be added to the waiting list", function(){
    var student5 = new Student("Steph", 11, "parent@parent.com")
    assert.deepStrictEqual(group2.waitingList.data.length, 0)
    assert.deepStrictEqual(group2.students.length, 2)

    group2.addStudent(student5)

    assert.deepStrictEqual(group2.waitingList.data.length, 1)
    assert.strictEqual(group2.waitingList.data[0].name, "Steph")
    assert.deepStrictEqual(group2.remainingClassSpace(), 0);
  });

  it("should put the next student in the waiting list into the class should a vacancy arise", function(){
    var student1 = new Student("Kevin", 9, "foo@bar.com")
    var student2 = new Student("Kathleen", 10, "baz@bar.com")
    var student4 = new Student("Pearse", 9, "joe@bloggs.com")
    var student5 = new Student("Steph", 11, "parent@parent.com")

    group3 = new Group("Table Tennis", 2, [student1, student2])

    group3.removeStudent(student2)
    assert.deepStrictEqual(group3.students.length, 1);
    assert.strictEqual(group3.remainingClassSpace(), 1);

    group3.addToWaitingList(student4)
    group3.addToWaitingList(student5)
    assert.deepStrictEqual(group3.waitingList.data.length, 2);
    group3.addFromWaitingList();
    assert.deepStrictEqual(group3.waitingList.data.length, 1);
    assert.deepStrictEqual(group3.students.length, 2)
    assert.strictEqual(group3.waitingList.data[0].name, "Steph")
  });


})
