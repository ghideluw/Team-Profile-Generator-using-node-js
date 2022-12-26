//import inquirer
const inquirer = require("inquirer");

const fs = require("fs");

//import the manager class
const Manager = require("./src/lib/manager");

//The engineer class is imported
const Engineer = require("./src/lib/engineer");

//the employee class is required
const Intern = require("./src/lib/intern");

//this generate html file is used to create the markdown file

const generateHTML = require("./utils/generateHTML");

let answersArr = [];

//prompt initial questions for employee type

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'Please choose a role for the employee you would like to add.',
        choices: ['Manager', 'Engineer', 'Intern', 'Team Complete!']

    }
];

//create manager input
const manager = [
    //array of questions for manager input

    {
        type: "input",
        message: "Enter manager name:",
        name: "name",
    },
    {
        type: "input",
        message: "Enter employee ID:",
        name: "id",
    },

    {
        type: "input",
        message: "Enter work email:",
        name: "email",

    },
    {
        type: "input",
        message: "Enter office number:",
        name: "officeNumber",
    },
];

//create engineer input
const engineer = [
    {
        type: "input",
        message: "Enter engineer name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter engineer ID:",
        name: "id",
    },
    {
        type: "input",
        message: "Enter enginner email:",
        name: "email",

    },
    {
        type: "input",
        message: "Please enter engineer github profile:",
        name: "github",

    },

];
//create intern input
const intern = [
    {
        type: "input",
        message: "Enter intern name:",
        name: "name"
    },
    {
        type: "input",
        message: "Enter intern ID:",
        name: "id",
    },
    {
        type: "input",
        message: "Enter intern email:",
        name: "email",

    },
    {
        type: "input",
        message: "Please enter intern school:",
        name: "school",

    },

];


//function to initialize the app

function init() {

    //use inquirer to prompt questions
    //if team is complete generate the team profile
    inquirer.prompt(questions).then(function (answers) {
        console.log(answers);
        if (answers.role === 'Team Complete!') {
            console.log(answersArr);
            generateTeam();
            return;

        }


        // generate manager info
        if (answers.role === "Manager") {
            inquirer.prompt(manager).then(function (answers) {
                console.log(answers)
                const manager = new Manager(answers);
                answersArr.push(manager);
                init();

            })
        }
        // generate engineer info
        if (answers.role === "Engineer") {
            inquirer.prompt(engineer).then(function (answers) {
                console.log(answers)
                const engineer = new Engineer(answers);
                answersArr.push(engineer);
                init();
            });
        }

        //generate intern input

        if (answers.role === 'Intern') {
            inquirer.prompt(intern).then(function (answers) {
                console.log(answers)
                const intern = new Intern(answers);
                answersArr.push(intern);
                init();


            })
        }
    })
};
//initialize app

init();


function generateTeam() {
    fs.writeFileSync("./dist/index.html", generateHTML(answersArr), 'utf8');
    console.log("Team Profile has been created!");
};



