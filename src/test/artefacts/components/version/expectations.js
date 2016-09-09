var chai = require('chai'),
    expect = chai.expect;

module.exports = function(res) {
  expect(res.body.version).to.equal('1.2');
  expect(res.body.versions).to.equal(undefined);
}
