//Import the employee parent class
const Employee = require("./employee");

//Intern class extends the employee parent class
class Intern extends Employee {
    //create constructor function which includes name, email, id, and school name
    constructor({name, email, id, school}) {

        
        //inherited properties from the employee parent class is name, email, and id
        super(name, id, email);

        //access the inputted school name from this instance of the intern class
        this.school = school;

        //use this instance to define the intern role
        this.role = "Intern";

    }

    //get id method retrieves id for this instance of the intern class
         getId () {
        return this.id;
        }

    //Get school method retrieves  the inputted value of school name from this instance of the intern class
    getSchool() {
        return this.school;
    }
    //Get role method retrieves role for this instance of the intern class
    getRole() {
        return this.role;

    }
    
}

//The intern class is exported to be accessed by index.js and index.html file.

module.exports = Intern;
