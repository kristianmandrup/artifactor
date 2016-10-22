const _ = require('../utils');

const check = require('./expect/get');
const test = require('mocha-test-dsl');

const file = require('../../adapters/file');

var mock = require('mock-fs');

// TODO: 
// See test/data for methods to populate with test data 
// use faker to create fake artefact version files
// Use artefact/io/file-saver to save them in appropriate path for file adapter to find them :)

mock({
  'path/to/fake/dir': {
    'some-file.txt': 'file content here',
    'empty-dir': {/** empty directory */}
  },
  'path/to/some.png': new Buffer([8, 6, 7, 5, 3, 0, 9]),
  'some/other/path': {/** another empty directory */}
});

// TODO: use new test DSL

let tester = test('Adapter: file');

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