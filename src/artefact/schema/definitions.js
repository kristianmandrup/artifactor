const author = require('./author');
const rating = require('./rating');
const environment = require('./environment');
const dependency = require('./environment/dependency');
const popularWith = require('./popular-with');

module.exports = {
  author,
  rating,
  environment,
  dependency,
  popularWith,
  version: {
    type: 'string',
    faker: 'system.semver'      
  }  
}