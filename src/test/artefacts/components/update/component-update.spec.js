const _ = require('../utils');
const expectations = require('./expectations');
const data = require('../../../../../requests/components/contacts/create');

// to use expect:
// _.expect()
const route = '/components/contacts';

describe('components', () => {
  describe('UPDATE item', () => {            
    it('should update a single component', async () => {   
      let result = await _.callApi(route, 'PUT', data);
      console.log('RESULT', result);         
      expectations(result);       
    });
  });
});
