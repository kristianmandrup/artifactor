const { display, expect } = require('../utils');

module.exports = {
  deleted: (result) => {
    // display(result);
    expect(result.deleted).to.be(true)
  },
  retrieved: (result) => {
    // display(result);
    expect(result._id).to.not.be.undefined;
  },
  created: (result) => {
    // display(result);
    expect(result._id).to.not.be.undefined;
  },    
  updated: (result) => {
    // display(result);
    expect(result._id).to.not.be.undefined;
  }    
}

 