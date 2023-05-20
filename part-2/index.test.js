import { test, expect } from "@jest/globals";
import { greetPerson } from "./index.js";

test("When given a string 'Chris', the greetPerson function returns the correct greeting string with Chris' name", () => {
  const actual = greetPerson("Chris");
  const expected = "Greetings, Chris";

  expect(actual).toBe(expected);
});

test("When given the string 'Liz K', the greetPerson function returns the correct greeting string with Liz K's name", () => {
  const actual = greetPerson("Liz K");
  const expected = "Greetings, Liz K";

  expect(actual).toBe(expected);
});

test("When given a number instead of a string, the greetPerson function returns the correct try again message.", () => {
  const actual = greetPerson(1);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

test("When given a boolean instead of a string, the greetPerson function returns the correct try again message.", () => {
  const actual = greetPerson(true);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});
