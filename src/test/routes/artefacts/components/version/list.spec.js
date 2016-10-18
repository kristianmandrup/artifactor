const _ = require('../utils');
const check = require('./expect/list');
const test = require('mocha-test-dsl');

const route = 'components/contacts/versions';

test('route: components/contacts')
  .that('GET versions list')            
    .will('return a list of versions', async () => {   
        check(await _.callApi(route));       
    })
    .run();
