const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require ("./Intern");

function Roster() {
  this.employees = [];
  this.manager;
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

        this.employeeRoster();

      });
};

Roster.prototype.employeeRoster = function () {
    inquirer.prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Add an employee by selecting the employee type.",
        choices: [
        "Intern",
        "Engineer",
        "Manager",
        ],
        validate: (employeeTypeInput) => {
        if (employeeTypeInput) {
        return true;
        } else {
        console.log("Please select the employee's role.");
        }
      },
    }
    ]);



}

    // {
    //     type: "list",
    //     name: "employeeType",
    //     message: "What is the employee/s role?",
    //     choices: [
    //         "Intern",
    //         "Engineer",
    //         "Manager",
    //     ],
    //     validate: (employeeTypeInput) => {
    //         if (employeeTypeInput) {
    //             return true;
    //         } else {
    //                 console.log("Please select the employee/s role.");
    //             }
  
    //     },
        
    // }
 



  


Roster.prototype.getGitHub = function () {
   inquirer.prompt({
    type: "input",
    name: "github",
    message: "What is your GitHub URL?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter a GitHub user URL.");
      }
    },
  });
};

module.exports = Roster;