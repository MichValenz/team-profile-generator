const Intern = require("../lib/Intern");

jest.mock("../lib/Intern");

console.log(new Intern());

test("creates an intern object", () => {
  const intern = new Intern(String);

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.officeNumber).toEqual(expect.any(Number));
  expect(intern.school).toEqual(expect.any(String));
  console.log(new Intern());
});
