const { display, expect } = require('../utils');

// Check an action response
// always allow for chaining checks
// Can be reused in various different testing scenarios!
class Checker {
  // result is a response
  constructor(result) {
    this.result = result;
    this.item = result.body;
  }

  // deleted is true
  wasDeleted(expected = true) {    
    expect(this.item.deleted).to.equal(expected);
    return this;
  }

  wasUpdated(expected = true) {
    expect(this.item.updated).to.equal(expected);
    return this;
  }

  wasCreated(expected = true) {
    expect(this.item.created).to.equal(expected);
    return this;
  }

  wasRated(expected = true) {
    expect(this.item.rated).to.equal(expected);
    return this;
  }

  // should be an error
  wasError(expected = true) {
    let test = expect(this.item.error)
    expected ? test.to.exist : test.to.be.undefined;      
    return this;
  }

  isVersion(version) {
    expect(this.item.version).to.equal(version);
    return this;
  }

  isNamed(name) {
    expect(this.item.name).to.equal(name);
    return this;
  }

  isList(length = 3) {
    expect(this.item.length).to.equal(length);
  }   

  ratingAdded(expected = true) {  
    expect(this.item.rated).to.equal(expected);
  }

  ratedBy(name) {  
    expect(this.item.rating.name).to.equal(name);
  }

  starsRated(stars) {  
    expect(this.item.rating.vote).to.equal(stars);
  }
}

module.exports = function(result) {
  return new Checker(result);
}