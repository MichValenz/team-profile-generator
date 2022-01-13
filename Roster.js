const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require ("./lib/Intern");
//const {writeFile, copyFile} = require("./utils/generate-site.js");

function Roster() {
  this.employeesArr = [];
  this.managerArr = [];
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
      ])
      .then((answers ) => {
        
        console.log(answers);
        this.employeesArr.push((new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum)))

        console.table(this.employeesArr);
        
        
        this.employeeRoster();

      });
};

Roster.prototype.employeeRoster = function () {
  inquirer
    .prompt([{

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
    }])
    .then(({employeeType}) => {
        if (employeeType === "Intern") {
             this.setIntern();
        } else if (employeeType === "Engineer") {
            this.setEngineer();
        } else if (employeeType === "Cancel") {
            console.log("You've chosen to cancel. Roster complete.")
        }
    },
    )
    
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
    ])
    .then((internAnswers) => { 
     this.employeesArr.push(
         new Intern(
           internAnswers.empName,
           internAnswers.empID,
           internAnswers.empEmail,
           internAnswers.empPhone,
           internAnswers.school))
        
        console.table(this.employeesArr);
        this.statusCheck();

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
    ])
    .then((engAnswers) => {
      this.employeesArr.push(
        new Intern(
          engAnswers.empName,
          engAnswers.empID,
          engAnswers.empEmail,
          engAnswers.empPhone,
          engAnswers.github
        )
      );

      console.table(this.employeesArr);
      this.statusCheck();
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
  .then(( nextStepAnsw ) => {
    if (nextStepAnsw.nextStep) {
       this.employeeRoster();
    } else if (!nextStepAnsw.nextStep){
      console.log("Roster completed.")
       return this.employeesArr;
      
    }

  })

};

  


// new Roster()
//   .initializeRoster()
//   .then((employeesArr) => {
//     return generatePage(employeesArr);
//   })
//   .then((pageHTML) => {
//     return writeFile(pageHTML);
//   })
//   .then((writeFileResponse) => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then((copyFileResponse) => {
//     console.log(copyFileResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

new Roster.initializeRoster()
  
  .then((employeesArr) => {
    const pageHTML = generatePage(employeesArr);

    fs.writeFile("./index.html", pageHTML, (err) => {
      if (err) throw new Error(err);

      console.log(
        "Page created! Check out index.html in this directory to see it!"
      );
    });
  });


module.exports = Roster;