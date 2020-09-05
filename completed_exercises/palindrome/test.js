const palindrome = require('./index');

test.skip('palindrome function is defined', () => {
  expect(typeof palindrome).toEqual('function');
});

test.skip('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy();
});

test.skip('" aba" is not a palindrome', () => {
  expect(palindrome(' aba')).toBeFalsy();
});

test.skip('"aba " is not a palindrome', () => {
  expect(palindrome('aba ')).toBeFalsy();
});

test.skip('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy();
});

test.skip('"1000000001" a palindrome', () => {
  expect(palindrome('1000000001')).toBeTruthy();
});

test.skip('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy();
});

test.skip('"pennep" a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy();
});
