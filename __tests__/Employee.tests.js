const Employee = require("../src/lib/employee");

describe("Employee",() => {
const sampleEmployee = {
    name:"John",
    id: 101,
    email: "john@hotmail.com",

};
describe("constructor tests", () => {
    test("should create a new employee class", () => {
   const employee= new Employee(sampleEmployee); 
    expect(employee).toBeInstanceOf(Employee);
});
test("should create a new instance of an employee class with name, id, email",() => {
    const employee = new Employee(sampleEmployee.name, sampleEmployee.id, sampleEmployee.email);
    expect(employee).toEqual({
        name:"John",
        id: 101,
        email: "john@hotmail.com",
    });
});
});
describe("method tests", () =>{
    test("should return id when the getid method is called", () => {
        const employee = new Employee(sampleEmployee.name, sampleEmployee.id, sampleEmployee.email);
        expect(employee.getId()).toEqual(101);
    });

test("should produce name when the getName method is called", ()=> {
    const employee = new Employee(sampleEmployee.name, sampleEmployee.id, sampleEmployee.email);
    expect(employee.getName()).toEqual("John");
})
test("should return email when the getEmail method is called", () => {
    const employee = new Employee(sampleEmployee.name, sampleEmployee.id, sampleEmployee.email);
    expect(employee.getEmail()).toEqual("john@hotmail.com");
});
});
});
