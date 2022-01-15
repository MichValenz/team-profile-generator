const Manager = require("../lib/Manager");

jest.mock("../lib/Manager");

console.log(new Manager());

test("creates an Manager object", () => {
  const manager = new Manager(String);
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
  console.log(new Manager());
});
