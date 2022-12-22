const Intern = require("../src/lib/intern");

describe("Intern", () => {
const sampleIntern = {
    name: "Genevive",
    id: 103,
    email: "genevive@gmail.com",
    school:"University of Toronto",


};
describe("constructor tests", ()=> {
    test("should construct a new instance of the intern class", () => {
        const intern = new Intern(sampleIntern);
        expect(intern).toBeInstanceOf(Intern);
    });
    test("should construct a new instance of an intern class with name, id, email, and office number", () =>{
        const intern = new Intern(sampleIntern);
        expect(intern).toEqual({
            name: "Genevive",
            id: 103,
            email: "genevive@gmail.com",
            school: "University of Toronto",
            role: "Intern",

        });
    });
});
describe("method tests", () =>{
    test("should return id when the getid method is called", ()=> {
       const intern = new Intern(sampleIntern);
       expect(intern.getId()).toEqual(103);
    });
test("should return name when the getName method is called", ()=> {
    const intern = new Intern(sampleIntern);
    expect(intern.getName()).toEqual("Genevive");
});

test("should return email when the getEmail method is called", () => {
    const intern = new Intern(sampleIntern);
    expect(intern.getEmail()).toEqual("genevive@gmail.com");
});
test("should return school when the getSchool method is called", ()=> {
    const intern = new Intern(sampleIntern);
    expect(intern.getSchool()).toEqual("University of Toronto");
})
test("should return intern role when the getRole method is called", () => {
    const intern = new Intern(sampleIntern);
    expect(intern.getRole()).toEqual("Intern");
});

});

});
