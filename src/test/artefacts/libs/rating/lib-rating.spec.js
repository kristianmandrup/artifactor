const _ = require('../../utils');
const data = require('../requests/jquery/rate');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/libs/jquery';

async function rating(data) {
  return _.callApi(route + '/rate', 'POST', data);
}

describe('libs', () => {
  describe('POST lib rating', () => {            
    it('should add a rating to the lib', _.doAsync(async () => {   
      let result = await rating(data);
      expectations.ratingAdded(result);       
    }));

    it('should NOT add a second rating to the lib for the same user', _.doAsync(async () => {   
      let result = await rating(data);         
      expectations.duplicateUserRatingNotAdded(result);       
    }));
  });
});
