const entities = require('../entities');

// top level entity schemas are named <entity>-schema.js
//  component-schema.js
module.exports = entities.names.reduce( (schemas, name) => {
  let mod = require('./' + name);
  schemas[name] = mod.schema;
  return schemas;
}, {})