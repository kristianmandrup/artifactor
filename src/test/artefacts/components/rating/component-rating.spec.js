const _ = require('../utils');
const expectations = require('./expectations');
const data = require('../../../../../requests/components/contacts/rate');

// to use expect:
// _.expect()
const route = '/components/contacts';

// async function rating(data) {
//   return await _.callApi(route + '/rate', 'POST', data);
// }

describe('components', () => {
  describe('POST component rating', () => {            
    it('should add a rating to the component', async () => {   
      let result = await _.callApi(route + '/rate', 'POST', data);
      // console.log('result', result);
      expectations.ratingAdded(result);             
    });

    it('should NOT add a second rating to the component for the same user', async () => {   
      // let result = await rating(data);         
      let result = await _.callApi(route + '/rate', 'POST', data);
      expectations.duplicateUserRatingNotAdded(result);       
    });
  });
});
