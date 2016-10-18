const _ = require('../utils');
const route = 'components/contacts/version?version=1.2';
const check = require('./expect/get');
const test = require('mocha-test-dsl');

test('route: components')
  .that('GET version')            
    .will('return the component version', async () => {   
        check(await _.callApi(route));       
    })
    .run();
