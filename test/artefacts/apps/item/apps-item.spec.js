'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');

// to use expect:
// _.expect()

describe('apps', () => {
  describe('GET item', () => {            
    it('should return a single app', _.doAsync(async () => {   
      let result = await _.callApi('/apps/contacts-app');         
      expectations(result);       
    }));
  });
});
