const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/libs/jquery?version=1.1';

describe('libs', () => {
  describe('GET version', () => {            
    it('should retrieve lib version 1.1', _.doAsync(async () => {   
      let result = await _.callApi(route, 'GET');         
      expectations(result);       
    }));
  });
});
