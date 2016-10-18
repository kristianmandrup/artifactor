'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/remove');

// to use expect:
// _.expect()

const route = '/addons/sigma-ui';

describe('addons', () => {
  describe('DELETE item', () => {            
    it('should delete a single addon', _.doAsync(async () => {   
      let result = await _.callApi(route, 'DELETE', data);         
      expectations(result);       
    }));
  });
});
