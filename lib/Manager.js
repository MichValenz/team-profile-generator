const Employee = require("./Employee")

class Manager extends Employee {
  constructor(name, id, email, officeNumbers, role) {
    super(name, id, email, officeNumbers, role);
  }


}

module.exports = Manager