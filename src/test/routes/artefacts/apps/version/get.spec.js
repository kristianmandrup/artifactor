const _ = require('../utils');
const route = 'apps/contacts-app/version?version=1.2';
const check = require('./expect/get');
const test = require('mocha-test-dsl');

test('route: apps')
  .that('GET version')            
    .will('return the app version', async () => {   
        check(await _.callApi(route));       
    })
    .run();
