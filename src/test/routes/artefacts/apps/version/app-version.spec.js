const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/components/contacts-app?version=1.2';

describe('apps', () => {
  describe('GET version', () => {            
    it('should retrieve app version 1.2', async () => {   
      let result = await _.callApi(route, 'GET');         
      expectations(result);       
    });
  });
});
