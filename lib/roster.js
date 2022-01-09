const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require ("./Intern");

function Roster() {
  this.employeesArr = [];
  this.managerArr = [];
  this.manager;
  this.intern;
  this.engineer;
  this.roster;
}

Roster.prototype.initializeRoster = function () {
    
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
          validate: (managerNameInput) => {
            if (managerNameInput) {
              return true;
            } else {
              console.log("Please enter a manager's name.");
            }
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "Enter the manager's employee ID.",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter an employee ID.");
            }
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "Enter the manager's email address.",
          validate: (managerEmailInput) => {
            if (managerEmailInput) {
              return true;
            } else {
              console.log("Please enter an email.");
            }
          },
        },
        {
          type: "input",
          name: "managerOfficeNum",
          message: "Enter the manager's office phone number",
          validate: (managerEmailInput) => {
            if (managerEmailInput) {
              return true;
            } else {
              console.log("Please enter an office phone number.");
            }
          },
        },
      ])
      .then(({name, id, email, officeNumbers}) => {
        this.manager = new Manager(name, id, email, officeNumbers);
        this.manager = this.managerArr[0];

        this.employeeRoster();

      });
};

Roster.prototype.employeeRoster = function () {
  inquirer
    .prompt({

      type: "list",
      name: "employeeType",
      message: "Add an employee by selecting the employee type.",
      choices: ["Intern", "Engineer", "Manager"],
      validate: (employeeTypeInput) => {
        if (employeeTypeInput) {
          return true;
        } else {
          console.log("Please select the employee's role.");
        }
    },
    })
    .then(({employeeType}) => {
        if (employeeType === "Intern") {
            return this.setIntern();
        } else if (employeeType === "Engineer") {
            return this.setEngineer();
        }
    })
    
}

Roster.prototype.setIntern = function () {
  inquirer.prompt(
    {
      type: "input",
      name: "internName",
      message: "What is the employee's name?",
      validate: (internNameInput) => {
        if (internNameInput) {
          return true;
        } else {
          console.log("Please enter employee's name.");
        }
      },
    },

    {
      type: "input",
      name: "employeeID",
      message: "Enter the employee's ID.",
      validate: (employeeIDInput) => {
        if (employeeIDInput) {
          return true;
        } else {
          console.log("Please enter an ID for employee.");
        }
      },
    },
    {
      type: "input",
      name: "employeeeEmail",
      message: "Enter the employee's email.",
      validate: (employeeEmailInput) => {
        if (employeeEmailInput) {
          return true;
        } else {
          console.log("Please enter an email for employee.");
        }
      },
    },
    {
      type: "input",
      name: "employeeePhone",
      message: "Enter the employee's office phone number.",
      validate: (employeePhoneInput) => {
        if (employeePhoneInput) {
          return true;
        } else {
          console.log("Please enter an office phone number for employee.");
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "Enter the intern's school.",
      validate: (schoolInput) => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter a school for employee.");
        }
      },
    },
  )
        .then((internAnswers) => {
        this.intern = new Intern (internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.officeNumbers, internAnswers.school);
        this.intern = this.employeesArr[0];
})
}

Roster.prototype.setEngineer = function () {
  inquirer
    .prompt(
      {
        type: "input",
        name: "engineerName",
        message: "What is the employee's name?",
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("Please enter employee's name.");
          }
        },
      },

      {
        type: "input",
        name: "engineerID",
        message: "Enter the employee's ID.",
        validate: (engineerIDInput) => {
          if (engineerIDInput) {
            return true;
          } else {
            console.log("Please enter an ID for employee.");
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Enter the employee's email.",
        validate: (engineerEmailInput) => {
          if (engineerEmailInput) {
            return true;
          } else {
            console.log("Please enter an email for employee.");
          }
        },
      },
      {
        type: "input",
        name: "engineerPhone",
        message: "Enter the employee's office phone number.",
        validate: (engineerPhoneInput) => {
          if (engineerPhoneInput) {
            return true;
          } else {
            console.log("Please enter an office phone number for employee.");
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's GitHub username.",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub username.");
          }
        },
      }
    )
    .then((engineerAnswers) => {
      this.engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.officeNumbers,
        engineerAnswers.github,
      );
      this.engineer = this.employeesArr[0];
    });
};



module.exports = Roster;