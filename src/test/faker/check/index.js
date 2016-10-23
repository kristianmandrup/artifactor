const { display, expect } = require('../utils');

module.exports = {
  isValid: (artefact) => {
    expect(artefact).to.be.defined;
  }
}