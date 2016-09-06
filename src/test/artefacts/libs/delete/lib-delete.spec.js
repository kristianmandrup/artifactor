'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/jquery/remove');

// to use expect:
// _.expect()
const route = '/libs/jquery';

describe('libs', () => {
  describe('DELETE item', () => {            
    it('should delete a single lib', _.doAsync(async () => {   
      let result = await _.callApi(route, 'DELETE', data);         
      expectations(result);       
    }));
  });
});
