const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, officeNumbers, github, role){
        super(name, id, email, officeNumbers, role);
        this.github = github;

    }
}

module.exports = Engineer