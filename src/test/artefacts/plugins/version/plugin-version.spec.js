const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/plugins/i18n?version=1.1';

describe('plugins', () => {
  describe('GET version', () => {            
    it('should retrieve plugin version 1.1', _.doAsync(async () => {   
      let result = await _.callApi(route, 'GET');         
      expectations(result);       
    }));
  });
});
