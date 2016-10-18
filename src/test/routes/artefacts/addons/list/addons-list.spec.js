'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()
const route = '/addons';

describe('addons', () => {
  describe('GET list', () => {            
    it('should return a list of addons', _.doAsync(async () => {   
      let result = await _.callApi(route);         
      expectations(result);       
    }));
  });
});
