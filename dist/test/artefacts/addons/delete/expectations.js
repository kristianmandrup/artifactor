'use strict';

var chai = require('chai'),
    expect = chai.expect;

module.exports = function (res) {
  expect(res.length).to.equal(1);
};