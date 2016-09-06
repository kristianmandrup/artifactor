const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/components/contacts?version=1.2';

describe('components', () => {
  describe('GET version', () => {            
    it('should retrieve component version 1.2', _.doAsync(async () => {   
      let result = await _.callApi(route, 'GET');         
      expectations(result);       
    }));
  });
});
