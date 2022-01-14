// create the employee section
let generateEmployees = (employeesArr) => {
  console.log("generate proj", employeesArr)



  return `
    <section class="my-3" id="roster">
      <h2 class="empSection">Employees</h2>
      <div class="flex-row justify-space-between">


    ${employeesArr
      
      .map(({ name, id, email, officeNumbers, role, school, github}) => {
        return `
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class= "employeeName">${name}</h3>
              <h4 class= "jobTitle">${role}</h4>
              
              <p>${officeNumbers}</p>
              <p>${id}</p>
              <p>
              <a href="mailto:${email}">email</a>
              </p>
              <p>${school}</p>
              <p>
              <a href="github.com/${github}</p>

            </div>
          `;
    })
   .join("")}
        

      </div>
    </section>
  `;
;
}

// export function to generate entire page
module.exports = (templateData) => { 
 
  
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
      <div class=">
        <h1 class="team-roster"</h1> 
        "Team Roster"
      </h1>
        
      </div>
    </header>
    <main class="employee-container">
     
      ${generateEmployees(templateData)}
      
    </main>
    
  </body>
  </html>
  `;

  
};

