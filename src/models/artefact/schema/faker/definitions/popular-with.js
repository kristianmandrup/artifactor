module.exports = {
  properties: {
    name: {
      type: 'string',
      $ref: '#/definitions/name'
    },
    combinedCount: {
      faker: {
        'random.number': {min: 1, max: 500}
      }            
    }
  }  
};
