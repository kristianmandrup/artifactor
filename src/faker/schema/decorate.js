const { display } = require('../utils');
const { merge } = require('lodash');
const defaultFakerObj = require('./artefact');

// deep merge
module.exports = function(schema, fakerObj) {
  fakerObj = fakerObj || defaultFakerObj
  // display(schema, 'SCHEMA')

  return merge({}, schema, fakerObj);
}