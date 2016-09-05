'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()

describe('apps', () => {
  describe('GET list', () => {            
    it('should return a list of apps', _.doAsync(async () => {   
      let result = await _.callApi('/apps');         
      expectations(result);       
    }));
  });
});
