'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/apps';

describe('apps', () => {
  describe('GET list', () => {            
    it('should return a list of apps', async () => {   
      let result = await _.callApi(route, 'GET');         
      expectations(result);       
    });
  });
});
