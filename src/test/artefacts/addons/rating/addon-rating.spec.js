const _ = require('../../utils');
const data = require('../requests/rating');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/addons/sigma-ui';

async function rating(data) {
  return _.callApi(route + '/rate', 'POST', data);
}

describe('addons', () => {
  describe('POST addon rating', () => {            
    it('should add a rating to the addon', _.doAsync(async () => {   
      let result = await rating(data);
      expectations.ratingAdded(result);       
    }));

    it('should NOT add a second rating to the app for the same user', _.doAsync(async () => {   
      let result = await rating(data);         
      expectations.duplicateUserRatingNotAdded(result);       
    }));
  });
});
