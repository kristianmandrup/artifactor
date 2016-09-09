var chai = require('chai'),
    expect = chai.expect;

module.exports = function(res) {
  console.log('RESPONSE', res);
  expect(res.length).to.equal(2);
}
