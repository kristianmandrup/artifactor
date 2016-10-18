const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/sigma-ui/create');

// to use expect:
// _.expect()
const route = '/addons/sigma-ui';

describe('addons', () => {
  describe('POST item', () => {            
    it('should create a single app', _.doAsync(async () => {   
      let result = await _.callApi(route, 'POST', data);         
      expectations(result);       
    }));
  });
});
