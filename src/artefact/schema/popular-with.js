module.exports = {
  type: 'array',
  items: {
    type: 'object',    
    properties: {
      name: {
        type: 'string'
      },
      combinedCount: {
        type: 'number',
        minimum: 100, 
        maximum: 2000      
      }
    },
    required: ['combinedCount', 'name']  
  }
};
