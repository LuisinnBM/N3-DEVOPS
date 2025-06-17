const soma = require('../src/soma');

test('soma 2 + 3 deve dar 5', () => {
  expect(soma(2, 3)).toBe(5);
});
