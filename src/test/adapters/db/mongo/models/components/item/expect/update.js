var chai = require('chai'),
    expect = chai.expect;

module.exports = {
  retrieved: (result) => {
    // console.log(JSON.stringify(result));
    expect(result.length).to.be.gt(2)
  }
}