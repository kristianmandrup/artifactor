const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/contacts/create');

// to use expect:
// _.expect()
const route = '/components/contacts';

describe('components', () => {
  describe('UPDATE item', () => {            
    it('should update a single component', _.doAsync(async () => {   
      let result = await _.callApi(route, 'UPDATE', data);         
      expectations(result);       
    }));
  });
});
