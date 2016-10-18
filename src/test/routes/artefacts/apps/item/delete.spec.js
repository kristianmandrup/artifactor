'use strict';

const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/contacts-app/remove');

// to use expect:
// _.expect()
const route = '/apps/contacts-app';

describe('apps', () => {
  describe('DELETE item', () => {            
    it('should delete a single app', async () => {   
      let result = await _.callApi(route, 'DELETE', data);         
      expectations(result);       
    });
  });
});
