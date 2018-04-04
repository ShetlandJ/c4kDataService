const bbStudent1 = {
  name: "Kevin",
  age: 9,
  parentEmail: "falco@mclusky.com"
}

const bbStudent2 = {
  name: "Sarah",
  age: 9,
  parentEmail: "tim@lessavyfav.com"
}

const bbStudent3 = {
  name: "Pearse",
  age: 10,
  parentEmail: "alex@dietcig.com"
}

const bbStudent4 = {
  name: "Kelly",
  age: 11,
  parentEmail: "jeff@rosenstock.com"
}

const basketballClass = {
  courseName: "Basketball",
  capacity: 25,
  students: [bbStudent1, bbStudent2, bbStudent3, bbStudent4],
  waitingList: [],
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
