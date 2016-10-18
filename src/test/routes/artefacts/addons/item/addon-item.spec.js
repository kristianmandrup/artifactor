const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()

const route = '/addons/sigma-ui';

describe('apps', () => {
  describe('GET item', () => {            
    it('should return a single app', _.doAsync(async () => {   
      let result = await _.callApi(route);         
      expectations(result);       
    }));
  });
});
