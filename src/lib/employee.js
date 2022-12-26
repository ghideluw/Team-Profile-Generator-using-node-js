class Employee {
//create constructor function for employee object with employee as class including name, id and email as properties
constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;

}

//use the get name method to retrieve the user's name for the employee class
getName() {
    return this.name;
}

//the get id method retrieves the id value for the employee class
getId() {
    return this.id;
}

//the get email method returns the inputted email address from the user for the employee class
getEmail() {
    return this.email;

}

}

//export employee file to be accessed by the role class and generate html file

module.exports = Employee;