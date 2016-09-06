'use strict';

var chai = require('chai'),
    expect = chai.expect;

function ratingAdded(res) {
  expect(res.length).to.equal(2);
}

function duplicateUserRatingNotAdded(res) {
  expect(res.length).to.equal(2);
}

module.exports = {
  ratingAdded: ratingAdded,
  duplicateUserRatingNotAdded: duplicateUserRatingNotAdded
};