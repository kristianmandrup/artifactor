var chai = require('chai'),
    expect = chai.expect;

class TestCreate {
  constructor(result) {
    this.result = result;
  }

  test() {
    expect(this.result.body.created).to.equal(true);
  }  
}

class TestCreateContacts extends TestCreate {
  constructor(result) {
    super(result);
  }

  test() {
    super.test();
    expect(this.result.body.created).to.equal(true);
  }

  log() {
    console.log(this.result.body);
  }  
}

export default {
  contacts: (result) => {
    return new TestCreateContacts(result).test();
  }
}