'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/remove');

// to use expect:
// _.expect()

describe('apps', () => {
  describe('DELETE item', () => {            
    it('should delete a single app', _.doAsync(async () => {   
      let result = await _.callApi('/apps/contacts-app', 'POST', data);         
      expectations(result);       
    }));
  });
});
