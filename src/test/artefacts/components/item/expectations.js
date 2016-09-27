var chai = require('chai'),
    expect = chai.expect;

module.exports = function(res) {
  console.log('RESPONSE', res.body);
  expect(res.body.data.name).to.equal('my-contacts');
}
