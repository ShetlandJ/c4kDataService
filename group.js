class Group {

  constructor(courseName, capacity, students, waitingList) {
    this.courseName = courseName;
    this.capacity = capacity;
    this.students = students;
    this.waitingList = waitingList;
  }

  remainingClassSpace() {
    var classSpace = this.capacity - this.students.length
    if (classSpace > 0) {
      return classSpace
    } else {
      return 0;
    }
  }
}

module.exports = Group;
