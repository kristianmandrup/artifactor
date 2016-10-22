const _ = require('../utils');

const check = require('./expect/get');
const test = require('mocha-test-dsl');

const file = require('../../adapters/file');

// TODO: use new test DSL

test('File io')
  .that('an instance')            
    .will('set paths correctly', () => {

    })
    // .run();

test('File io')
  .that('delete version')            
    .will('deletes it', () => {

    })
    // .run();