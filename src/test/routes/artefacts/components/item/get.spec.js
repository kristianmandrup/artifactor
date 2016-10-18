const _ = require('../utils');
const check = require('./expect/get');
const test = require('mocha-test-dsl');
const route = 'components/contacts';

test('route: components')
  .that('GET item')            
    .will('return a single component', async () => {   
        check(await _.callApi(route));       
    })
    .run();
