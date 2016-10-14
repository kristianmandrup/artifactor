'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()

describe('plugins', () => {
  describe('GET list', () => {            
    it('should return a list of plugins', async () => {   
      let result = await _.callApi('/apps');         
      expectations(result);       
    });
  });
});
