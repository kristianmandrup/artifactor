const chai = require('chai');
const expect = chai.expect;
chai.should();

module.exports = {
  isValid: (artefact) => {
    expect(artefact).to.be.defined;
  }
}