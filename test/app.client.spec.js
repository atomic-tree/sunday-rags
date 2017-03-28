let expect = require('expect');

describe('App', () => {
  it('should be able to run tests', () => {
    let word = 'hello world';

    expect(word).toBe('hello world');
  });
});