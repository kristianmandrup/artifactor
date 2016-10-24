const { display } = require('./utils');
const check = require('./check');
const test = require('mocha-test-dsl'); 

const { generatorFor } = require('../../../faker')
const generate = generatorFor('component');

module.exports = {
  display,
  check,
  test,
  generate
}