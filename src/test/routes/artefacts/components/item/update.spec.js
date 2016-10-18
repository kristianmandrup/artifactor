const _ = require('../utils');
const requests = require('../requests');
requests.update = requests.components.contacts.create;
const route = '/components/contacts';
const check = require('./expect/update');
const test = require('mocha-test-dsl');

test('route: components')
  .that('UPDATE item')            
    .will('update a single component', async () => {   
        check(await _.callApi(route, 'PUT', requests.update));       
    })
    .run();
