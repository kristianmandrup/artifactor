const { display, expect } = require('../../../utils');

let props = ['name', 'type', 'version', 'description', 'status', 'avgRating']

// Check an model query response
// always allow for chaining checks
class Checker {

  // result is a Mongo query response
  constructor(result) {
    this.result = result;
    this.id = result._id;
  }

  // TODO: use expected Mongo query results!
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

  matches(opts = {}) {
    for (let prop of props)
      this.hasValue(prop, opts[prop])
    return this;
  }

  hasValue(key, value) {
    if (key && value)
      expect(this.item[key]).to.equal(value);
    return this;
  }

  isVersion(version) {
    return this.hasValue('version', version)
  }

  isType(type) {
    return this.hasValue('type', type)
  }

  isNamed(name) {
    return this.hasValue('name', name)
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