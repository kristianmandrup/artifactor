const _ = require('../utils');
const requests = require('../requests');
requests.create = requests.components.contacts.create;
const route = '/components';
const check = require('./expect/create');
const test = require('mocha-test-dsl');

test('route: components')
  .that('CREATE item')            
    .will('create a single component', async () => {   
        check(await _.callApi(route, 'POST', requests.create));       
    })
    .run();
