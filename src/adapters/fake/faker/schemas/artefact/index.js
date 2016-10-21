module.exports = {
  type: 'object',
  required: [
    'name',
    'date',
    'description',
    'author',
    'version',    
    'location',
    'installations',
    'popularWith',
    'status',
    'type',
    'keywords',
    'categories',
    'avgRating',
    'ratings',
    'environment'
  ],
  definitions: require('./definitions'),
  properties: {
    date: {
      type: 'date',
      faker: 'random.date' // ??
    },
    name: {
      type: 'string',
      faker: 'random.word'
    },
    description: {
      type: 'string',
      faker: 'lorem.paragraph'
    },
    author: {
      '$ref': '#/definitions/author'
    },
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
    type: {
      enum: ['component', 'plugin', 'add-on', 'theme', 'service', 'library']
    },
    location: {
      type: 'string',
      faker: 'internet.url'      
    },
    installations: {
      type: 'number',
      minimum: 1, 
      maximum: 5000
    },
    popularWith: {
      type: 'object',
      properties: {
        apps: {
          $ref: '#/definitions/popularWith'
        },
        components: {
          $ref: '#/definitions/popularWith'
        },
        addons: {
          $ref: '#/definitions/popularWith'
        }                        
      },
      required: ['components']
    },
    avgRating: {
      type: 'number',
      minimum: 0, 
      maximum: 5    
    },
    ratings: {
      type: 'array',
      $ref: '#/definitions/rating'
    },    
    environment: {
      '$ref': '#/definitions/environment'
    } 
  }
};
