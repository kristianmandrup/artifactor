const _ = require('../utils');
const requests = require('../requests');
requests.update = requests.apps.contacts.create;
const route = '/apps/contacts-app';
const check = require('./expect/update');
const test = require('mocha-test-dsl');

test('route: apps')
  .that('UPDATE item')            
    .will('update a single app', async () => {   
        check(await _.callApi(route, 'PUT', requests.update));       
    })
    .run();
