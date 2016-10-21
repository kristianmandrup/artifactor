const _ = require('../utils');

const check = require('./expect/get');
const test = require('mocha-test-dsl');

const file = require('../../adapters/file');

// TODO: use new test DSL

let tester = test('Adapter: file:json');

tester
  .that('an instance')            
    .will('set paths correctly', () => {

    })
    // .run();

tester
  .that('get by id')            
    .will('return latest version', () => {

    })
    // .run();

tester
  .that('get specific version')            
    .will('return specific version', () => {

    })
    // .run();    

tester
  .that('get > version')            
    .will('return all versions >', () => {

    })
    // .run();        

tester
  .that('get < version')            
    .will('return all versions <', () => {

    })
    // .run();