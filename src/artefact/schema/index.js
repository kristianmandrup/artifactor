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
      // type: 'string',
      // format: 'date-time'
    },
    name: {
      type: 'string',      
    },
    description: {
      type: 'string'      
    },
    author: {
      '$ref': '#/definitions/author'
    },
    version: {
      type: 'string'
      // pattern: '^(\d+\.)?(\d+\.)?(\*|\d+)$',            
    },
    notice: {
      type: 'string'                  
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
      },
      minItems: 1,
      uniqueItems: true          
    },
    categories: {
      type: 'array',
      items: {
        type: 'string',
      },
      minItems: 1,
      uniqueItems: true          
    },
    type: {
      enum: ['component', 'app', 'plugin', 'add-on', 'theme', 'service', 'library']
    },
    location: {
      type: 'string',      
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
