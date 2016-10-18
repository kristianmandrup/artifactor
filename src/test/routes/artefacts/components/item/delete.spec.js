'use strict';

const _ = require('../utils');

const requests = require('../requests');
const check = require('./expect/delete');
const test = require('mocha-test-dsl');
const route = '/components/contacts';

test('route: components')
  .that('DELETE item')            
    .will('delete a single component', async () => {
        let result = await _.callApi(route, 'DELETE', requests.components.contacts.remove);
        console.log('result', result.body);   
        check.wasDeleted(result);       
    })
    .run();
