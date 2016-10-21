const author = require('./author');
const rating = require('./rating');
const popularWith = require('./popular-with');

module.exports = {
  author,
  rating,
  popularWith,
  version: {
    faker: 'system.semver'      
  }  
}