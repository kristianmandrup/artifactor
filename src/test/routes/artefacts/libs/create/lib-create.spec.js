const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/jquery/create');

// to use expect:
// _.expect()
const route = '/libs/jquery';

describe('libs', () => {
  describe('POST item', () => {            
    it('should create a single lib', async () => {   
      let result = await _.callApi(route, 'POST', data);         
      expectations(result);       
    });
  });
});
