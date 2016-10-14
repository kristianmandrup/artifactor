const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/contacts-app/create');

// to use expect:
// _.expect()
const route = '/apps/contacts-app';

describe('apps', () => {
  describe('UPDATE item', () => {            
    it('should update a single app', async () => {   
      let result = await _.callApi(route, 'UPDATE', data);         
      expectations(result);       
    });
  });
});
