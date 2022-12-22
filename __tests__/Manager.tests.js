const Manager = require("../src/lib/manager");

describe("Manager", () => {
    const sampleManager = {
        name: "Brenda",
        id: 104,
        email: "brenda@hotmail.com",
        officeNumber: 353,

    };

    describe("constructor tests", () => {
        test("should construct a new instance of the manager class", () => {
            const manager = new Manager(sampleManager);
            expect(manager).toBeInstanceOf(Manager);

        });
    
        test("should construct a new instance of a manager class with a name, id, email, and office number", () => {
            const manager = new Manager(sampleManager);
            expect(manager).toEqual({
                name: "Brenda",
                id: 104,
                email: "brenda@hotmail.com",
                officeNumber: 353,
                role: "Manager",
            });
        });
});

describe("method tests", () => {
    test("should return id when the getid method is called", () => {
        const manager = new Manager(sampleManager);
        expect(manager.getId()).toEqual(104);

    });
test("should return name when the getName method is called", () => {
    const manager = new Manager(sampleManager);
    expect(manager.getName()).toEqual("Brenda");

});
test("should return email when the getEmail method is called", () =>{
    const manager = new Manager(sampleManager);
    expect(manager.getEmail()).toEqual("brenda@hotmail.com");
});
test("should return office number when the getOfficeNumber method is called", () => {
    const manager = new Manager(sampleManager);
    expect(manager.getOfficeNumber()).toEqual(353);

});
test("should return manager role when the getRole method is called", () => {
    const manager = new Manager(sampleManager);
    expect(manager.getRole()).toEqual("Manager");
});

});
});

