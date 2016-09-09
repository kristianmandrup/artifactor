const _ = require('../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = 'components/contacts?version=1.2';

describe('components', () => {
  describe('GET version', () => {            
    it('should retrieve component version 1.2', async () => {   
      let result = await _.callApi(route);  
      // console.log('res', result);       
      expectations(result);       
    });
  });
});
