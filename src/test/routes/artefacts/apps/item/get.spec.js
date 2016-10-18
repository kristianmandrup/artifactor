const _ = require('../utils');
const check = require('./expect/get');
const test = require('mocha-test-dsl');

const route = 'apps/contacts-app'; 

test('route: apps')
  .that('GET item')            
    .will('return a single app', async () => {   
        check(await _.callApi());       
    })
    .run();
