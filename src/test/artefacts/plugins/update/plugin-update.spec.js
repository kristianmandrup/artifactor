const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/i18n/create');

// to use expect:
// _.expect()
const route = require('../route');

describe('plugins', () => {
  describe('UPDATE item', () => {            
    it('should update a single plugin', _.doAsync(async () => {   
      let result = await _.callApi(route, 'UPDATE', data);         
      expectations(result);       
    }));
  });
});
