const { display } = require('../utils');
const { merge } = require('lodash');
const defaultFakerObj = require('./schema');

// deep merge
module.exports = function(schema, fakerObj) {
  fakerObj = fakerObj || defaultFakerObj.artefact;

  console.log('CATEGORY');

  display(schema.definitions.category, 'SCHEMA')

  display(fakerObj.definitions.category, 'FAKER')
  return merge({}, schema, fakerObj);
}