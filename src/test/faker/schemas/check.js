const chai = require('chai');
const expect = chai.expect;
chai.should();

module.exports = {
  isValidEnv: (env) => {
    expect(env).to.be.defined;
  } 
}