'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/i18n/remove');

// to use expect:
// _.expect()
const route = require('../route');

describe('plugins', () => {
  describe('DELETE item', () => {            
    it('should delete a single app', _.doAsync(async () => {   
      let result = await _.callApi(route, 'DELETE', data);         
      expectations(result);       
    }));
  });
});
