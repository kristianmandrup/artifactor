const _ = require('../../utils');
const data = require('../requests/rating');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/components/contacts';

async function rating(data) {
  return _.callApi(route + '/rate', 'POST', data);
}

describe('components', () => {
  describe('POST component rating', () => {            
    it('should add a rating to the component', _.doAsync(async () => {   
      let result = await rating(data);
      expectations.ratingAdded(result);       
    }));

    it('should NOT add a second rating to the component for the same user', _.doAsync(async () => {   
      let result = await rating(data);         
      expectations.duplicateUserRatingNotAdded(result);       
    }));
  });
});
