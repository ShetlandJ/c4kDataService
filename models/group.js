const Queue = require('./queue');

class Group {

  constructor(courseName, capacity, students, waitingList) {
    this.courseName = courseName;
    this.capacity = capacity;
    this.students = students;
    this.waitingList = new Queue();
    this.atCapacity = this.atCapacity()
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

  addStudent(student) {
    if (!this.atCapacity && (this.waitingList.data.length === 0)) {
      this.students.push(student)
    } else if (!this.atCapacity && (this.waitingList.data.length > 0)) {
      this.addFromWaitingList()
    } else {
      this.addToWaitingList(student);
    }
  }

  removeStudent(student) {
    var studentIndex = this.students.indexOf(student);
    if (studentIndex > -1) {
      this.students.splice(studentIndex, 1);
    }
  }

  addToWaitingList(student) {
    this.waitingList.add(student);
  }

  addFromWaitingList() {
    var student = this.waitingList.remove();
    this.students.push(student);
  }
}

module.exports = Group;
