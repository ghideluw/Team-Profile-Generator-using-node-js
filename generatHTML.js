const fs = require("fs");
const generateHTML = require("./utils/generateHTML");
const { answersArr } = require("./index");

function generatHTML() {
    fs.writeFileSync("./dist/index.html", generateHTML(answersArr), 'utf8');
    console.log("Team Profile has been created!");
}
