'use strict';

const _ = require('../utils');
const check = require('./expect/list');
const test = require('mocha-test-dsl');

test('route: components')
  .that('GET list')            
    .will('return a list of components', async () => {   
        check(await _.callApi('components'));       
    })
    .run();
