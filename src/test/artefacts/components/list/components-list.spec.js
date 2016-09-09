'use strict';

const _ = require('../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = 'components';

describe('components', () => {
  describe('GET list', () => {            
    it('should return a list of components', async () => {   
      let result = await _.callApi(route);         
      expectations(result);       
    });
  });
});
