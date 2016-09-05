const entities = require('../../artefacts/entities');

// top level entity schemas are named <entity>-schema.js
//  component-schema.js
module.exports = entities.names.reduce( (schemas, name) => {
  schemas[name] = require('./' + name + '-schema').schema;
  return schemas;
}, {})