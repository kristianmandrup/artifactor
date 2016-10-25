const { display, expect } = require('./utils');

class CheckSpecial {
  constructor(res) {
    this.res = res;
  }
    
  isSlugified(expected = true) {
    let test = /\w+-\w+/.test(this.res.name)
    expect(test).to.eql(expected);
  }
}

module.exports = {
  validation: require('../../checker').validation,
  special: (res) => {
    return new CheckSpecial(res);
  }  
}
