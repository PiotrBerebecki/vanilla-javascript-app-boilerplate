const {
  sum,
  multiply,
  addOneAsyncWithCallback
} = require('../../public/assets/js/app');

describe('sum', () => {
  test('adds numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('multiply', () => {
  test('multiplies numbers', () => {
    expect(multiply(1, 2)).toBe(2);
  });
});

describe('addOneAsyncWithCallback', () => {
  test('adds asynchronously', (done) => {
    addOneAsyncWithCallback(1, function(err, res) {
      expect(res).toBe(2);
      done();
    });
  });
});
