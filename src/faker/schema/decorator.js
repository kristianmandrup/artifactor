const { merge } = require('lodash');
const defaultFakerObj = require('./artefact');

// deep merge
module.exports = function(obj, fakerObj = defaultFakerObj) {
  return _.merge(obj, fakerObj);
}