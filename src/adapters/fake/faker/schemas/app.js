// https://www.npmjs.com/package/json-schema-faker

// For Faker API, see: https://github.com/marak/Faker.js/

// Test schema: http://json-schema-faker.js.org/
// To convert to valid JSON, use: http://www.freeformatter.com/json-formatter.html#ad-output

// an app is simply a root level component
const schema = Object.assign(require('./component'), {
  type: {
    enum: ['app']      
  } 
});

module.exports = schema;