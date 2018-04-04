const Queue = require('./queue');

class Group {

  constructor(courseName, capacity, students, waitingList) {
    this.courseName = courseName;
    this.capacity = capacity;
    this.students = students;
    this.waitingList = new Queue();
    this.atCapacity = this.atCapacity()
    this.remainingClassSpace = this.remainingClassSpace();
  }

  atCapacity() {
    if (this.remainingClassSpace() > 0) {
      return false
    } else {
      return true
    }
  }

  remainingClassSpace() {
    var classSpace = this.capacity - this.students.length
    if (classSpace > 0) {
      return classSpace
    } else {
      return 0;
    }
  }

  addToWaitingList(student) {
    this.waitingList.add(student);
  }
}

module.exports = Group;
