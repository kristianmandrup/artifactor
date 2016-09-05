const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = require('../route');

describe('plugins', () => {
  describe('GET item', () => {            
    it('should return a single plugin', _.doAsync(async () => {   
      let result = await _.callApi(route);         
      expectations(result);       
    }));
  });
});
