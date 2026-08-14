const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 10 to 5 equal 2', () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
test('divide 15 to 5 equal 3', () => {
  expect(calculator.divide(15, 5)).toBe(3);
});

test('multiply 15 to 3 equal 45', () => {
  expect(calculator.multiply(15, 3)).toBe(45);
});
test('multiply 6 to 3 equal 18', () => {
  expect(calculator.multiply(6, 3)).toBe(18);
});