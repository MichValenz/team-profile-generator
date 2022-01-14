const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, officeNumbers, school, role) {
    super(name, id, email, officeNumbers, role)
    this.school = school;
  }
  //getGitHub()
}

module.exports = Intern;
