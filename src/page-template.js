// create the employee section
let generateEmployees = (employeesArr) => {
  console.log("generate proj", employeesArr)

  return `<div class="card">
  <header class="card-header">
${employeesArr

      .map(({ name, id, email, officeNumbers, role, school, github }) => {
        return `

<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      ${name}
    </p>
    <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div class="card-content">
    <div class="content">
      <p>
      <ul>
        <li class="roleTitle"> ${role}</li>
        <li> Employee ID: ${id} </li>
        <li> <a href="${email}">Email</a> </li>
        <li> Phone: ${officeNumbers} </li>
        <li> School: ${school} </li>
        <li><a href="https://github.com/${github}">Github</a></li>
      </ul>
    
     
    </div>
  </div>
  <footer class="card-footer">
 
  </footer>
</div> 

`
      })
      .join("")}
  
      </div>
    </section>
`
    };


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
  
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
  <section class="hero is-link">
  <div class="hero-body">
    <p class="title">
      Team Roster
    </p>
    <p class="subtitle">
      Employee Information
    </p>
  </div>
</section>

  <div class="empSection"> 
     
      ${generateEmployees(templateData)}
      
  </div>
    
  </body>
<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>


  </html>
  `;

  
};

