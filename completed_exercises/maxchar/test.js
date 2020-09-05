const maxChar = require('./index');

test.skip('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test.skip('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test.skip('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});
