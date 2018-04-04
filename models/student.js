class Student {

  constructor(name, age, parentEmail) {
    this.name = name;
    this.age = age;
    this.parentEmail = parentEmail;
    this.registerDate = Date.now()
  }

}

module.exports = Student;
