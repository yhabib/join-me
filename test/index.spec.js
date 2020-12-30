const renderListWithLastKeyword = require('../dist/join-me');

test('joins list of elements with comma and last one with keyword and', () => {
  const list = ['hello', 'hallo', 'ciao', 'hola'];
  expect(renderListWithLastKeyword({list})).toBe('hello, hallo, ciao and hola');
});

test('joins list of elements with custom separator comma and last one with and', () => {
  const list = ['hello', 'hallo', 'ciao', 'hola'];
  expect(renderListWithLastKeyword({list, separator: '|'})).toBe('hello|hallo|ciao and hola');
});

test('joins list of elements with comma and last one with custom keyword', () => {
  const list = ['hello', 'hallo', 'ciao', 'hola'];
  expect(renderListWithLastKeyword({list, keyword: ' und '})).toBe('hello, hallo, ciao und hola');
});

test('joins list of elements with custom separator comma and last one with and', () => {
  const list = ['hello', 'hallo', 'ciao', 'hola'];
  expect(renderListWithLastKeyword({list, separator: '|'})).toBe('hello|hallo|ciao and hola');
});

test('doesn\'t add anything to list of one item', () => {
  const list = ['hello'];
  expect(renderListWithLastKeyword({list})).toBe(list[0]);
});

test('throws exception if list is not an array', () => {
  const list = 'hello';
  expect(() => renderListWithLastKeyword({list})).toThrow();
})