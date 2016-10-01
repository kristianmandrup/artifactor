module.exports = {
  id: 'rating',
  rating: {
    type: 'number'
    minimum: 1, 
    maximum: 5
  },  
  comment: {
    type: 'string',
    faker: 'lorem.sentence'
  },
  username: {
    type: 'string',
    faker: 'name.firstName'
  } 
});
