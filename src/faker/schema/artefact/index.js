const author = require('./author');

module.exports = {
  properties: {
    author: author,
    date: {
      faker: 'date.recent'
    },
    name: {
      faker: 'random.word'
    },
    description: {
      faker: 'lorem.paragraph'
    },
    version: {
      faker: 'system.semver'
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
      faker: 'random.number'
    },
    avgRating: {
      faker: 'random.number'
    }
  }
}
