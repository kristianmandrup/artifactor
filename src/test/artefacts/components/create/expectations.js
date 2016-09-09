var chai = require('chai'),
    expect = chai.expect;

module.exports = function(res) {
  expect(res.body.created).to.equal(true);
}
