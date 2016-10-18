const _ = require('../utils');
const requests = require('../requests');
requests.remove = requests.apps.contacts.remove;
const check = require('./expect/delete');
const test = require('mocha-test-dsl');
const route = '/apps/contacts-app';

test('route: apps')
  .that('DELETE item')            
    .will('delete a single app', async () => {
        let result = await _.callApi(route, 'DELETE', requests.remove);
        console.log('result', result.body);   
        check.wasDeleted(result);       
    })
    .run();
