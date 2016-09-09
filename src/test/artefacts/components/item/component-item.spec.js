const _ = require('../../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = 'components/contacts';

describe('components', () => {
  describe('GET item', () => {            
    it('should return a single component', async () => {   
      let result = await _.callApi(route);         
      expectations(result);       
    });
  });
});
