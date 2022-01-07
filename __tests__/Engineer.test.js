const Engineer = require("../lib/Engineer");

jest.mock("../lib/Engineer");

console.log(new Engineer());

test("creates an engineer object", () => {
  const engineer = new Engineer(String);

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.officeNumber).toEqual(expect.any(Number));
  console.log(new Engineer);
});
