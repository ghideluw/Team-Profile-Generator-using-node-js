//Importing the parent employee class
const Employee = require("./employee");

//The manager class extends the parent employee class
class Manager extends Employee {
    //constructor function uses name, email, id, and office number
    constructor( name, email, id, officeNumber ) {
        //name, email, and id are inherited properties from the parent Employee class
        super( name, email, id );

        //Access the inputted values of office number using this instance of the manager class
        this.officeNumber = officeNumber;

        //uses this instance to define role as manager
        this.role = "Manager";

    }

    //Get office number method is used to retrieve input value of office number for this instance of manager class
    getOfficeNumber() {
        return this.officeNumber;

    }
    //get role method retrieves role for the instance of the manager class
    getRole() {
        return this.role;
    }
    getId() {
        return this.id;
    }

}

//the manager class is exported to be used in the index.js and index.html file
module.exports = Manager;
