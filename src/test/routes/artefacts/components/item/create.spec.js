const _ = require('../utils');
const xp = require('./expectations');
const data = require('../../../../../requests/components/contacts/create');

// to use expect:
// _.expect()
// POST to route: contacts/:id
const route = '/components/my-contacts';
let test;

describe('components', () => {
  describe('POST/create item: contacts', () => {
    test = xp.contacts;

    it('should create a single component called: contacts', async () => {   
      let result = await _.callApi(route, 'POST', data);
      // console.log('RESULT', result);         
      test(result);       
    });
  });
});
