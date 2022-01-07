const Employee = require("../lib/Employee");

jest.mock("../lib/Employee");

console.log(new Employee())

test("creates an employee object", () => {
    const employee = new Employee(String);
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
    console.log(new Employee)
});

