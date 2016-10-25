module.exports = {
  type: 'object',
  required: [
    'app'
  ],
  properties: {
    app: {
      $ref: '#/definitions/category'
    },
    ui: {
      $ref: '#/definitions/category'
    },
    test: {
      $ref: '#/definitions/category'
    }
  }        
};