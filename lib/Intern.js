const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, officeNumbers, school) {
    super(name, id, email, officeNumbers);
    this.school = school;
  }
  //getGitHub()
}

module.exports = Intern;
