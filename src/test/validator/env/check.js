const { display, expect } = require('./utils')

class ValidationChecker {
  constructor(result) {
    this.result = result;
  }
  
  isValid(expected = true) {
    expect(this.result).to.eql(expected)
  }  
}

module.exports = (result) => {
  return new ValidationChecker(result)
}