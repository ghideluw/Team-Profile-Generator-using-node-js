//Import the employee class 
const Employee = require("./employee");

//extend engineer class from the employee class
class Engineer extends Employee {

    constructor({name, email, id, github}) {
        super({ name, email, id});
//Access the github profile from the instance of the engineer class

this.github = github;

//Defines the role as engineer
this.role = "Engineer";
}
//Get id method on engineer class returns the id value
getId() {
    return this.id;
}
//Get github method on engineer class returns the inputted github profile URL value 

getGithub() {
    return this.github;
}

//get role returns the engineer role from this instance of the engineer class
getRole() {
    return this.role;  
}
}

//The engineer class is exported to be accessed by the index.js and index.html file

module.exports = Engineer;
