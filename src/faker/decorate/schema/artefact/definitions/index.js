const name = require('./name');
const author = require('./author');
const rating = require('./rating');
const popularWith = require('./popular-with');

console.log('NAME', name);

module.exports = {
  name,
  author,
  rating,
  popularWith,
  dependency: {
    name: {
      $ref: '#/definitions/name'
    }
  },
  version: {
    faker: 'system.semver'      
  }  
}