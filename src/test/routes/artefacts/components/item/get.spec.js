const _ = require('../utils');
const expectations = require('./expect/get');

// to use expect:
// _.expect()
const route = 'components/contacts';

describe('components', () => {
  describe('GET item', () => {            
    it('should return a single component', async () => {   
      let result = await _.callApi(route);   
      console.log('body', result.body);      
      expectations(result);       
    });
  });
});
