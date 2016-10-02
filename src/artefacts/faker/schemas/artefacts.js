const jsf = require('json-schema-faker');

const entities = require('../../entities');
const common = require('./common');
let schemas = {};

module.exports = entities.list.map(name => {
  schemas.main = require(`./${name}`);
  schemas.version = common.versionSchema(name);
  schemas.rating = common.rating; 

  return jsf(schemas.main, schemas.version, schemas.rating);
});