module.exports = {
  type: 'object',
  required: [
    'app'
  ],
  properties: {
    app: {
      type: 'object',
      properties: {
        vue: {
          type: 'string',
          $ref: '#/definitions/dependency'
        }
      }
    },
    ui: {
      type: 'object',
      properties: {
        bootstrap: {
          type: 'string',
          $ref: '#/definitions/dependency'
        }
      }
    },
    test: {
      type: 'object',
      properties: {
        mocha: {
          type: 'string',
          $ref: '#/definitions/dependency'
        }
      }
    }
  }        
};