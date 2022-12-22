const Engineer = require("../src/lib/engineer");

describe("Engineer",() => {
const sampleEngineer = {
    name: "Dorthy",
    id: 102,
    email: "dorthy@hotmail.com",
    github:"www.github.com/dorthyiscoding",
};
describe("constructor tests", () => {
    test("should construct a new instance of the engineer class", () => {
        const engineer = new Engineer(sampleEngineer);
        expect(engineer).toEqual({
            name: "Dorthy",
            id: 102,
            email: "dorthy@hotmail.com",
            github: "www.github.com/dorthyiscoding",
            role: "Engineer",
        });
    });
});
describe("method tests", () => {
    test("should return id when the getid method is called", () => {
        const engineer = new Engineer(sampleEngineer);
        expect(engineer.getId()).toEqual(102);
    });
test("should return name when the getName method is called", () => {
    const engineer = new Engineer(sampleEngineer);
    expect(engineer.getName()).toEqual("Dorthy");
});

test("should return email when the getEmail method is called", () => {
    const engineer = new Engineer(sampleEngineer);
    expect(engineer.getEmail()).toEqual("dorthy@hotmail.com");
});

test("should return github profile URL when the getGithub method is called", () => {
    const engineer = new Engineer(sampleEngineer);
    expect(engineer.getGithub()).toEqual("www.github.com/dorthyiscoding");
});
test("should return engineer role when the getRole method is called", () => {
    const engineer = new Engineer(sampleEngineer);
    expect(engineer.getRole()).toEqual("Engineer");
});

});

});