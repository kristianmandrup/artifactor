'use strict';

const _ = require('../utils');
const test = require('./expectations');
const data = require('../../../../../requests/components/contacts/remove');

// to use expect:
// _.expect()
const route = '/components/contacts';

describe('components', () => {
  describe('DELETE item', () => {            
    it('should delete a single component', async () => {   
      let result = await _.callApi(route, 'DELETE', data);         
      test.wasDeleted(result);       
    });

    it('should no longer exist', async () => {   
      let result = await _.callApi(route, 'GET');         
      test.doesNotExist(result);       
    });
  });
});
