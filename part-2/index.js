/* Complete the following greetPerson function so that it passes 
the tests in index.test.js. */

export function greetPerson(name) {
  if (typeof name === "string") {
    return `Greetings, ${name}`;
  }
  else {
    return `Please try again with a name!`;
  }
}
