var chai = require('chai'),
    expect = chai.expect;

module.exports = function(res) {
  expect(res.body.length).to.equal(3);
}
