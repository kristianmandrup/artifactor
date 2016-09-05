const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/contacts/create');

// to use expect:
// _.expect()
const route = '/components/contacts';

describe('components', () => {
  describe('POST item', () => {            
    it('should create a single component', _.doAsync(async () => {   
      let result = await _.callApi(route, 'POST', data);         
      expectations(result);       
    }));
  });
});
