const definitions = require('./definitions')
const { display } = require('../../../utils');

display(definitions, 'definitions');

// "faker": {
//   "finance.amount": [100, 10000, 2, "$"]
// }
// "chance": {
//   "pickone": [
//     [
//       "banana",
//       "apple",
//       "orange"
//     ]
//   ]

module.exports = {
  definitions: definitions,
  properties: {
    author: { 
      // from definitions
    },
    date: {
      faker: {
        'date.recent': [30, {format: 'ISO'}]
      }
    },
    name: {
      $ref: '#/definitions/name'
    },
    description: {
      faker: 'lorem.paragraph'
    },
    version: {
      faker: 'system.semver',
      format: 'semver'
    },
    notice: {
      faker: 'lorem.sentence'
    },
    keywords: {
      items: {
        faker: 'lorem.word'
      }
    },
    categories: {
      items: {
        faker: 'lorem.word'
      }
    },
    location: {
      faker: 'internet.url'      
    },
    installations: {
      faker: {
        'random.number': {min: 0, max: 4999} 
      }      
    },
    avgRating: {
      faker: {
        'random.number': {min: 1, max: 5, decimals: 2}
      }
    },
    ratings: {
      // minItems: 1
    },
    environment: {
      // from definitions
    }
  }
}
