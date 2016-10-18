const _ = require('../utils');
const check = require('./expect/list');
const test = require('mocha-test-dsl');
const route = 'apps';

test('route: apps')
  .that('GET list')            
    .will('return a list of apps', async () => {   
        check(await _.callApi(route));       
    })
    .run();
