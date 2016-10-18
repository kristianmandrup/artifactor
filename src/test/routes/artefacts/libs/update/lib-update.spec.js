const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/jquery/create');

// to use expect:
// _.expect()
const route = '/libs/jquery';

describe('libs', () => {
  describe('UPDATE item', () => {            
    it('should update a single lib', async () => {   
      let result = await _.callApi(route, 'UPDATE', data);         
      expectations(result);       
    });
  });
});
