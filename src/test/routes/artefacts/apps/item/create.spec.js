const _ = require('../utils');
const requests = require('../requests');
requests.create = requests.apps.contactsApp.create;
const route = '/apps';
const check = require('./expect/create');
const test = require('mocha-test-dsl');

test('route: apps')
  .that('CREATE item')            
    .will('create a single app', async () => {   
        check(await _.callApi(route, 'POST', requests.create));       
    })
    .run();
