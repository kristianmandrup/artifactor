const version = require('./version');

const schemas = {
  author: require('./author'),
  ui: require('./ui'),
  install: require('./install'),
  version: version,
  rating: rating,
  locVersion: Object.assign(version, {
    location: {
      type: 'string',
      faker: 'internet.url'
    }
  })
}

function isComponent(name) {
  return name === 'component' || name === 'app';
}

module.exports = {
  schema: schemas,
  versionSchema: function(name) {
    return isComponent(name) ? schemas.locVersion : schemas.version; 
  }  
}