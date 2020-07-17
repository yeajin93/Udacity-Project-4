import { checkForURL } from "../client/js/urlChecker";

describe('Testing if "checkForURL()" exist', () => {
  test("It should return true", () => {
    expect(checkForURL).toBeDefined();
  });
});

describe('Testing if the function "checkForURL()" is a function', () => {
  test("It should be a function", () => {
    expect(typeof checkForURL).toBe("function");
  });
});
