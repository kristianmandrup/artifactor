module.exports = {
  properties: {
    name: {
      $ref: '#/definitions/name'
    },
    combinedCount: {
      faker: {
        'random.number': {min: 1, max: 500}
      }            
    }
  }  
};
