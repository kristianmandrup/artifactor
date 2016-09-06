'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/apps';

describe('libs', () => {
  describe('GET list', () => {            
    it('should return a list of libs', _.doAsync(async () => {   
      let result = await _.callApi(route, 'GET');         
      expectations(result);       
    }));
  });
});
