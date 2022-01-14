const inquirer = require("inquirer");
const fs = require("fs");
const generateTemplate = require("./src/page-template");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require ("./lib/Intern");
//const {writeFile, copyFile} = require("./utils/generate-site.js");

function Roster() {
  this.employeesArr = [];
  this.manager;
  this.intern;
  this.engineer;
  
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
        {
          type: "list",
          name: "role",
          message: "What is the employee's role?",
          choices: ["Manager"],
        },
      ])
      .then((answers) => {
        console.log(answers);

        this.employeesArr.push(
          new Manager(
            answers.managerName,
            answers.managerId,
            answers.managerEmail,
            answers.managerOfficeNum,
            answers.role
          )
        );

        console.table(this.employeesArr);

        return this.employeeRoster(this.employeesArr);
      });
};

Roster.prototype.employeeRoster = function () {

     inquirer
       .prompt([
         {
           type: "list",
           name: "employeeType",
           message: "Add an employee by selecting the employee type.",
           choices: ["Intern", "Engineer", "Cancel"],
           validate: (employeeTypeInput) => {
             if (employeeTypeInput) {
               return true;
             } else {
               console.log("Please select the employee's role.");
             }
           },
         },
       ])
       .then(({ employeeType }) => {
         if (employeeType === "Intern") {
           this.setIntern();
         } else if (employeeType === "Engineer") {
           this.setEngineer();
         } else if (employeeType === "Cancel") {
           console.log("You've chosen to cancel. Roster complete.");
         }
       });
    
}

Roster.prototype.setIntern = function () {

  
  inquirer
    .prompt([
      {
        type: "input",
        name: "empName",
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
        name: "empID",
        message: "Enter the employee's ID.",
        validate: (internIDInput) => {
          if (internIDInput) {
            return true;
          } else {
            console.log("Please enter an ID for employee.");
          }
        },
      },
      {
        type: "input",
        name: "empEmail",
        message: "Enter the employee's email.",
        validate: (internEmailInput) => {
          if (internEmailInput) {
            return true;
          } else {
            console.log("Please enter an email for employee.");
          }
        },
      },
      {
        type: "input",
        name: "empPhone",
        message: "Enter the employee's office phone number.",
        validate: (internPhoneInput) => {
          if (internPhoneInput) {
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
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Intern"],
      },
    ])
    .then((internAnswers) => {
      this.employeesArr.push(
        new Intern(
          internAnswers.empName,
          internAnswers.empID,
          internAnswers.empEmail,
          internAnswers.empPhone,
          internAnswers.school,
          internAnswers.role,
        )
      );
      console.log(this.employeesArr);
      console.table(this.employeesArr);
      return this.statusCheck(this.employeesArr);
    });
}

Roster.prototype.setEngineer = function () {

  
  inquirer
    .prompt([
      {
        type: "input",
        name: "empName",
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
        name: "empID",
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
        name: "empEmail",
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
        name: "empPhone",
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
      },
      {
        type: "list",
        message: "What is the employee's role?",
        name: "role",
        choices: ["Engineer"],
      },
    ])
    .then((engAnswers) => {
      this.employeesArr.push(
        new Engineer(
          engAnswers.empName,
          engAnswers.empID,
          engAnswers.empEmail,
          engAnswers.empPhone,
          engAnswers.github,
          engAnswers.role
        )
      );

      console.table(this.employeesArr);
      return this.statusCheck(this.employeesArr);
    });

};

Roster.prototype.statusCheck = function () {
inquirer
  .prompt({
    type: "confirm",
    name: "nextStep",
    message: "Would you like to add another employee?",
    default: false,
  })
  .then((nextStepAnsw) => {
    if (nextStepAnsw.nextStep) {
      this.employeeRoster();
    } else if (!nextStepAnsw.nextStep) {
      console.log("Roster completed.");
      this.finalize(this.employeesArr);
    }
  })

};

Roster.prototype.finalize = function (employeesArr){
   
    const htmlFile = generateTemplate(employeesArr);
    console.log("test", employeesArr);

    fs.writeFile("./dist/index.html", htmlFile, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(
        "Roster created! Check out the index.html file in the directory."
      );
    });
  };



new Roster()
  .initializeRoster()

module.exports = Roster;