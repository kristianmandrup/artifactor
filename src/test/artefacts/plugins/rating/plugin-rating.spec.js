const _ = require('../../utils');
const data = require('../requests/rating');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = require('../route');

async function rating(data) {
  return _.callApi(route + '/rate', 'POST', data);
}

describe('apps', () => {
  describe('POST app rating', () => {            
    it('should add a rating to the app', async () => {   
      let result = await rating(data);
      expectations.ratingAdded(result);       
    });

    it('should NOT add a second rating to the app for the same user', async () => {   
      let result = await rating(data);         
      expectations.duplicateUserRatingNotAdded(result);       
    });
  });
});
