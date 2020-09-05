const vowels = require('./index');

test.skip('Vowels is a function', () => {
  expect(typeof vowels).toEqual('function');
});

test.skip('returns the number of vowels used', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test.skip('returns the number of vowels used', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test.skip('returns the number of vowels used', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});
