var chai = require('chai'),
    expect = chai.expect;

module.exports = {
  // deleted is true
  wasDeleted: (res) => {    
    expect(res.body.deleted).to.equal(true);
  },

  // should be an error
  doesNotExist: (res) => {
    expect(res.body.error).to.exist;
  } 
}
