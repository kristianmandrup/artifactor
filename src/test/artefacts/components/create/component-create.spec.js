const _ = require('../utils');
const expectations = require('./expectations');
const data = require('../../../../../requests/components/contacts/create');

// to use expect:
// _.expect()
// POST to route: contacts/:id
const route = '/components/contacts';

console.log('data', data)

describe('components', () => {
  describe('POST/create item: contacts', () => {            
    it('should create a single component called: contacts', async () => {   
      let result = await _.callApi(route, 'POST', data);
      // console.log('RESULT', result);         
      expectations(result);       
    });
  });
});
