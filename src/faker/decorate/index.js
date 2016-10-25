const { display } = require('../utils');
const { merge } = require('lodash');
const defaultFakerObj = require('./schema');

// deep merge
module.exports = function(schema, fakerObj) {
  fakerObj = fakerObj || defaultFakerObj

  return merge({}, schema, fakerObj);
}