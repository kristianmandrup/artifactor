var chai = require('chai'),
    expect = chai.expect;

function ratingAdded(res) {
  expect(res.body.rated.ratings.length).to.equal(4);
}

function duplicateUserRatingNotAdded(res) {
  expect(res.body.rated.ratings.length).to.equal(4);
}


module.exports = {
  ratingAdded: ratingAdded,
  duplicateUserRatingNotAdded: duplicateUserRatingNotAdded
}
