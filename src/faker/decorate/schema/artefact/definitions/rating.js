module.exports = {
  rating: {
    faker: 'random.number'
  },  
  comment: {
    faker: 'lorem.sentence'
  },
  username: {
    faker: {
      // todo: create username defintion
      $ref: '#/definitions/name',
    }
  } 
};
