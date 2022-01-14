const sum = require('./sum');

test('soma 4 e 5', () =>{
  expect(sum(4,5)).toBe(9);
});

test('soma 0 e 0', () =>{
  expect(sum(0,0)).toBe(0);
});