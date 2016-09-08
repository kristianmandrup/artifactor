const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/contacts/create');

// to use expect:
// _.expect()
// POST to route: contacts/:id
const route = '/components/contacts';

describe('components', () => {
  describe('POST/create item: contacts', () => {            
    it('should create a single component called: contacts', _.doAsync(async () => {   
      let result = await _.callApi(route, 'POST', data);         
      expectations(result);       
    }));
  });
});
