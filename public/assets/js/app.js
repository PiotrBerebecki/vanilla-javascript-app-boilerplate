console.log('Hello');

const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;


function addOneAsyncWithCallback(n, cb) {
  setTimeout(function() {
    cb(null, n + 1);
  }, 200);
}

module.exports = {
  sum,
  multiply,
  addOneAsyncWithCallback
};
