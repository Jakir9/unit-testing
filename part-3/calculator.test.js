/* 
import the things we need from jest */
import { test, expect } from "@jest/globals";

/*  Import functions across
write test for basic functions

*/

import * as calculator from "./calculator.js";

test("Adding the two inputs", () => {
    expect(calculator.add(1,2)).toBe(3);
})

test("Subtracting one input from another", () => {
    expect(calculator.subtract(10,7)).toBe(3);
})

test("Multiplying the two inputs", () => {
    expect(calculator.multiply(10,2)).toBe(20);
})

test("Dividing the first input by the second", () => {
    expect(calculator.divide(-15,2)).toBe(-7.5);
})

test("Squaring the input", () => {
    expect(calculator.square(7)).toBe(49);
})

test("Perfoming a calculation on the inputs", () => {
    expect(calculator.calculate("*", 45, 9 )).toBe(405);
})

test("Perfoming a calculation with incorrect operator", () => {
    expect(calculator.calculate(".", 45, 9 )).toBe(405);
})

test('throws on fullstop for operator', () => {
    expect(() => {
      drinkFlavor('octopus');
    }).toThrow();
  });
  