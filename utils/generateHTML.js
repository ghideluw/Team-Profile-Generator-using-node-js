//create employee card from input to generate html
const generateHTML = (answersArr) => {
  let newCard = '';
  let employeeCard = [];
  for (let i = 1; i < answersArr.length; i++) {
    switch (answersArr[i].getRole()) {
      case 'Engineer':
        newCard += `<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header"><i class="fa-sharp fa-solid fa-glasses"></i>Engineer</div>
      <div class="card-body">
        <h5 class="card-title">Name: ${answersArr[i].name}</h5>
        <p class="card-text">
          <li>id: ${answersArr[i].id} </li>
          <li>Email: <a href="mailto:${answersArr[i].email}">${answersArr[i].email}</a></li>
          <li>Github: <a href="https://www.github.com/${answersArr[i].github}">${answersArr[i].github}</a></li>
        </p>
      </div>
    </div>`;

        employeeCard.push(newCard)
        break;

      case 'Intern':
        newCard += `<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header"><i class="fa-sharp fa-solid fa-glasses"></i>Intern</div>
      <div class="card-body">
        <h5 class="card-title">Name: ${answersArr[i].name}</h5>
        <p class="card-text">
          <li>id: ${answersArr[i].id}</li>
          <li>Email: <a href="mailto:${answersArr[i].email}">${answersArr[i].email}</a></li>
          <li>School: ${answersArr[i].school}</li>
        </p>
      </div>
    </div>`;

        employeeCard.push(newCard)
        break;

    }
  };

  return `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://kit.fontawesome.com/009f80d9f8.js" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <link rel="stylesheet" href="./styles.css">
  <title>Team Profile:</title>
</head>
<body>
  <section id="header">
    <div class="container">
    
    <h1> Team Profile:</h1>
  <div class="container">
  <div class="row">
  

   <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header"><i class="fa-solid fa-mug-saucer"></i>Manager</i></div>
      <div class="card-body">
        <h5 class="card-title">Name: ${answersArr[0].name}</h5>
        <p class="card-text">
          <li>id: ${answersArr[0].id}</li>
    
          <li>Email: <a href="mailto:${answersArr[0].email}">${answersArr[0].email}</a></li>
          <li>office number: ${answersArr[0].officeNumber}</li>
        </p>
      </div>
    </div>

${newCard}
  </div>
  </div>
  </section>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"></script>
</body>

</html>`;

}


module.exports = generateHTML;

