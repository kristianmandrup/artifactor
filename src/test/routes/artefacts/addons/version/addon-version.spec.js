const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/addons/sigma-ui?version=1.2';

describe('addons', () => {
  describe('GET version', () => {            
    it('should retrieve addon version 1.2', _.doAsync(async () => {   
      let result = await _.callApi(route, 'GET');         
      expectations(result);       
    }));
  });
});
