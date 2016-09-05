const _ = require('../../utils');
const expectations = require('./expectations');
const data = require('../requests/create');

// to use expect:
// _.expect()

describe('apps', () => {
  describe('POST item', () => {            
    it('should create a single app', _.doAsync(async () => {   
      let result = await _.callApi('/apps/contacts-app', 'POST', data);         
      expectations(result);       
    }));
  });
});
