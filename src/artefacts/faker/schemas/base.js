// https://www.npmjs.com/package/json-schema-faker

// For Faker API, see: https://github.com/marak/Faker.js/
// Test schema: http://json-schema-faker.js.org/
// To convert to valid JSON, use: http://www.freeformatter.com/json-formatter.html#ad-output

const common = require('./common').schema;

const schema = {
  type: 'object',
  required: [
    'name',
    'author',
    'version',
    'location',
    'status',
    'type',
    'keywords'
  ],
  properties: {
    name: {
      type: 'string',
      faker: 'random.word'
    },
    description: {
      type: 'string',
      faker: 'lorem.paragraph'
    },
    author: common.author,
    version: {
      type: 'string',
      faker: 'system.semver'      
    },
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
    keywords: {
      type: 'array',
      items: {
        type: 'string',
        faker: 'lorem.word'
      },
      minItems: 1,
      uniqueItems: true          
    },
    categories: {
      type: 'array',
      items: {
        type: 'string',
        faker: 'lorem.word'
      },
      minItems: 1,
      uniqueItems: true          
    },
    versions: {
      type: 'array',
      $ref: 'version'
    },
    install: common.install
  }
};

module.exports = schema;