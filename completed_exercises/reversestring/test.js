const reverse = require('./index');

test.skip('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test.skip('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test.skip('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});
