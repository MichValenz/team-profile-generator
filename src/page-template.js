//const Manager = require("../lib/Manager");



// create the employee section
let generateEmployees = (employeesArr) => {
  console.log("generate proj", employeesArr)

  return `
    <section class="my-3" id="roster">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Employees</h2>
      <div class="flex-row justify-space-between">
      ${employeesArr
        
        .map(({ name, id, email, officeNumbers }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            
            <p>${officeNumbers}</p>
            <p>${id}</p>
            <p>
            <a href="mailto:${email}">email</a>
            </p>

          </div>
        `;
        })
        .join("")}
      </div>



      </div>
    </section>
  `;
};

// export function to generate entire page
module.exports = (templateData) => { 
 
  
  console.log("here", templateData)
  
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Roster</title>
  
   
    <link rel="stylesheet" href="style 2.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3"> 
        "Team Roster"
      </h1>
        
      </div>
    </header>
    <main class="container my-5">
     
      ${generateEmployees(templateData)}
      
    </main>
    
  </body>
  </html>
  `;

  
};

