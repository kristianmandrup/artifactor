const entities = require('../../artefacts/entities');

// top level entity schemas are named <entity>-schema.js
//  component-schema.js
module.exports = entities.names.reduce( (schemas, name) => {
  let mod = require('./' + name + '-schema');
  schemas[name] = mod.schema;
  return schemas;
}, {})