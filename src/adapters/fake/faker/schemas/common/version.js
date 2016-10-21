// https://www.npmjs.com/package/json-schema-faker

// For Faker API, see: https://github.com/marak/Faker.js/

// const jsf = require('json-schema-faker');

// Test schema: http://json-schema-faker.js.org/
// To convert to valid JSON, use: http://www.freeformatter.com/json-formatter.html#ad-output

const cmn = require('./index');

console.log('common', cmn)

const common = cmn.schema;

const schema = {
  required: [
    'number',
    'date',
    'rating'
  ],
  number: { // version number such as 1.3
    type: 'string',
    faker: 'system.semver'
  }, 
  date: {
    type: 'date',
    faker: 'date.past'
  },
  author: common.author,
  notice: {
    type: 'string',
    faker: 'lorem.sentence'            
  },
  status: {
    enum: [
      'alpha',
      'beta',
      'stable'
    ]
  },
  installations: {
    type: 'number',
    minimum: 1, 
    maximum: 5000
  },
  rating: {
    type: 'number',
    minimum: 1, 
    maximum: 5    
  },
  ratings: {
    type: 'array',
    $ref: 'rating'
  },
  ui: common.ui,
  install: common.install
}

module.exports = schema;