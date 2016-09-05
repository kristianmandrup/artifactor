'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/create');

// to use expect:
// _.expect()

describe('apps', () => {
  describe('UPDATE item', () => {            
    it('should update a single app', _.doAsync(async () => {   
      let result = await _.callApi('/apps/contacts-app', 'UPDATE', data);         
      expectations(result);       
    }));
  });
});
