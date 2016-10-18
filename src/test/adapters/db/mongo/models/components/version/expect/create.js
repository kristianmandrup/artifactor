var chai = require('chai'),
    expect = chai.expect;

module.exports = {
  created: (result) => {
    // console.log(JSON.stringify(result));
    expect(result._id).to.not.be.undefined;
  }
}