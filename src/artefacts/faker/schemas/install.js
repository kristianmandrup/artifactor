module.exports = {
  type: 'object',
  required: [
    'dependencies'
  ],
  properties: {
    bundles: {
      type: 'array',
      items: {
        type: 'string',
        faker: 'lorem.word'
      },
      minItems: 1,
      uniqueItems: true          
    },
    dependencies: {
      type: 'object',
      properties: {
        components: {
          type: 'string'
        },
        libs: {
          type: 'string'
        }            
      }
    }
  }        
};