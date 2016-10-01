const jsf = require('json-schema-faker');

const entities = require('../../entities');
const common = require('./common');

module.exports = entities.list.map(name => {
  let schema = require(`./${name}`);
  let versionSchema = common.versionSchema(name);
  let ratingSchema common.rating; 

  return jsf(schema, versionSchema, ratingSchema);
});