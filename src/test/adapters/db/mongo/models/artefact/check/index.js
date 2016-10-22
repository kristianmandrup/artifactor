var chai = require('chai'),
    expect = chai.expect;

function display(result) {
  let txt = JSON.stringify(result, null, 2);
  console.log(txt);  
}

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

 