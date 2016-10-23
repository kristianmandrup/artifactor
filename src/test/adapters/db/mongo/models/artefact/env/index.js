const { display } = require('../utils');
const check = require('./check');
const model = require('./model');
const test = require('mocha-test-dsl'); 

function ratingFor({user = 'kris', vote = 3, comment = 'some comment'}) {
  return {
    user,
    vote,
    comment
  }
}

module.exports = {
  display,
  check,
  test,
  ratingFor,
  model
}