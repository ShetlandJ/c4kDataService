class Student {

  constructor(name, age, parentEmail) {
    this.name = name;
    this.age = age;
    this.parentEmail = parentEmail;
    this.registerDate = this.getDate();
  }

  getDate(unixTimeStamp) {
    var now = new Date()
    return now.getFullYear();
  }

}

module.exports = Student;
