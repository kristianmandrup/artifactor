require('babel-core/register');
require('babel-polyfill');

function stringify(obj) {
  return JSON.stringify(obj, null, 2)
}

function display(obj) {
  console.log(stringify(obj));
}

module.exports = {
  stringify,
  display
}