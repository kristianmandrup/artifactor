// https://www.npmjs.com/package/json-schema-faker

// For Faker API, see: https://github.com/marak/Faker.js/
// Test schema: http://json-schema-faker.js.org/
// To convert to valid JSON, use: http://www.freeformatter.com/json-formatter.html#ad-output

const common = require('./common');

const schema = Object.assign(require('./base'), {
  type: {
    enum: ['component']
  },
  location: {
    type: 'string',
    faker: 'internet.url'      
  },  
  ui: common.ui,
  versions: {
    type: 'array',
    $ref: 'locVersion'
  }
});


module.exports = schema;