const karateStudent1 = {
  name: "Johnny",
  age: 14,
  parentEmail: "brian@foobar.com"
}

const karateStudent2 = {
  name: "Jill",
  age: 15,
  parentEmail: "kelly@foobar.com"
}

const karateStudent3 = {
  name: "James",
  age: 12,
  parentEmail: "michael@foobar.com"
}

const karateStudent4 = {
  name: "Hamish",
  age: 14,
  parentEmail: "liz@foobar.com"
}

const karateStudent5 = {
  name: "Guille",
  age: 13,
  parentEmail: "max@foobar.com"
}

const karateStudent6 = {
  name: "Steph",
  age: 15,
  parentEmail: "isabel@foobar.com"
}

const karateClass = {
  courseName: "Karate",
  capacity: 5,
  students: [karateStudent1, karateStudent2, karateStudent3, karateStudent4, karateStudent5],
  waitingList: [karateStudent6],
  remainingClassSpace: function() {
    var classSpace = this.capacity - this.students.length
    if (classSpace > 0) {
      return classSpace
    } else {
      return 0;
    }
  },
  addToWaitingList: function(student) {

  }
}


module.exports = basketballClass;
