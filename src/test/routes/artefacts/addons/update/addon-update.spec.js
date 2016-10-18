const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/create');

// to use expect:
// _.expect()
const route = '/addons/sigma-ui';

describe('addons', () => {
  describe('UPDATE item', () => {            
    it('should update a single addon', _.doAsync(async () => {   
      let result = await _.callApi(route, 'UPDATE', data);         
      expectations(result);       
    }));
  });
});
