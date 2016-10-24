const { display, expect } = require('../utils');

class ValidationChecker {
  constructor(validator) {
    this.validator = validator;    
  }

  for(artefact) {
    this.artefact = artefact;
    return this;
  }

  get valid() {
    return this.validator.validate(this.artefact).valid
  }
      
  isValid(expected = true) {
    expect(this.valid).to.eql(expected)
    return this;
  }  
}

module.exports = (artefact) => {
  return new ValidationChecker(artefact)
}