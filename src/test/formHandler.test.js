import { handleSubmit } from "../client/js/formHandler";

describe('Testing if "handleSubmit()" exist', () => {
  test("It should return true", () => {
    expect(handleSubmit).toBeDefined();
  });
});

describe('Testing if the function "handleSubmit()" is a function', () => {
  test("It should be a function", () => {
    expect(typeof handleSubmit).toBe("function");
  });
});
