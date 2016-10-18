const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/apps/contacts-app';

describe('apps', () => {
  describe('GET item', () => {            
    it('should return a single app', async () => {   
      let result = await _.callApi(route, 'GET');         
      expectations(result);       
    });
  });
});
