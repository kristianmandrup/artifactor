var chai = require('chai'),
    expect = chai.expect;

module.exports = {
  deleted: (result) => {
    // console.log(JSON.stringify(result));
    expect(result.deleted).to.be(true)
  }
}