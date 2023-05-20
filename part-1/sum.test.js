const sum = require('./sum'); //import the sum

test('Add 4 and 5 to return 9', () => { // test the function
    expect(sum(4, 5)).toBe(9);
});