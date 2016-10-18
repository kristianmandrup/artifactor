const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/libs/jquery';

describe('libs', () => {
  describe('GET item', () => {            
    it('should return a single lib', async () => {   
      let result = await _.callApi(route, 'GET');         
      expectations(result);       
    });
  });
});
