In this workshop, each folder is a separate Node.js project (and has its own `package.json`). So when completing a part, you should first `cd` into its folder before running any `npm` commands.

# Introduction to Jest

It's time to flex those docs-reading muscles 💪📖 and use the Jest docs to figure out how to do basic testing in JavaScript.

## Part 1

- `cd` into the [part-1](./part-1/) folder and follow the [Jest Getting Started](https://jestjs.io/docs/en/getting-started) guide to write your first test with Jest.

- For our puposes, only follow the first bit of the guide and stop once you've been able to write and run a test. In other words, you don't need to complete the "Running from command line" section or the "Additional configuration" section.

## Part 2

- [Read the Jest docs about using matchers here](https://jestjs.io/docs/en/using-matchers) and talk it through with your partner to make sure you both understand the basics about how matchers work.

- `cd` into the [part-2](./part-2/) folder and read the tests already written in [index.test.js](./part-2/index.test.js). Write the code for the `greetPerson` function in [index.js](./part-2/index.js) without changing these tests so that they all pass when you run them.

- You can use `npm run test` (or just `npm t`) to run the tests.

## Part 3

- `cd` into the [part-3](./part-3/) folder and run `npm i` to install dependencies. A test script has already been set up for you (in `package.json`), so you shouldn't need to do anything else other than the steps below.
- You can use `npm run test` (or just `npm t`) to run the tests.
- As a team, read and understand the functions already written in [calculator.js](./part-3/calculator.js).
- Then plan and write tests (in [calculator.test.js](./part-3/calculator.test.js)) to add confidence that the functions work as expected. Write at least one test per function.
  - For example, you could write a test that checks whether the `add` function returns `3` when passed `1` and `2` as arguments.
  - Similarly, you could write a test that checks whether `multiply` returns `8` when passed `2` and `4` as arguments.
  - It'd be a good idea to test each function more than once with differing arguments. For example, if you've tested that `add(1, 2)` returns `3`, maybe also test whether `add` returns the correct answer for a different set of arguments. This gives your team confidence that the same function works, even when handed different arguments.

## Part 4 (🌟 Bonus)

If you finish thoroughly testing all of the functions in the previous parts, `cd` into the [part-4](./part-4/) folder and then complete the following:

- Install Jest as a development only dependency. (Look at the Jest documentation if you need help.)
- Set up a NPM `test` script which runs Jest and allows you to write and use ESM in your tests. (Look at the previous parts or the Jest documentation https://jestjs.io/docs/ecmascript-modules if you need help.)
- In the part-4 folder, have a look at [app.js](./part-4/app.js) which contains a broken, buggy Rock, Paper, Scissors game and [app.test.js](./part-4/app.test.js).
- Follow the instructions in [app.test.js](./part-4/app.test.js) to write tests and debug the various functions.

Tips:

- Refer to the full list of Jest matchers [in the docs here](https://jestjs.io/docs/en/expect) to see all the different matchers available.
- Remember that you can prefix your matcher with `.not` to test that it does the opposite.
- You may have to write more than one test for a function to be fully sure that it's functioning correctly. Remember to account for different scenarios and edge cases.
- Don't forget to make the string that describes what your test is doing human-readable! It needs to say what inputs are being tested and what the expected output should be.
