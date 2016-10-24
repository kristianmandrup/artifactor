const author = require('./author');

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
  properties: {
    author: author,
    date: {
      faker: {
        'date.recent': [30, {format: 'YYYY-MM-DDTHH:mm:ssZ'}]
      }
    },
    name: {
      faker: 'random.word'
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
        'random.number': {min: 1, max: 5, precision: 0.01}
      }
    }
  },
  definitions: {
    popularWith: {
      name: {
        faker: 'random.word',
      },
      combinedCount: {
        faker: {
          'random.number': {min: 1, max: 500}
        }            
      }
    }
  }
}
