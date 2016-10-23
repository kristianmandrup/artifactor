const _ = require('../utils');

const check = require('./expect/get');
const test = require('mocha-test-dsl');

const FileAdapter = require('./');
let fileAdapter = new FileAdapter(entity, params); 

// TODO: use new test DSL

test('adapter: File')
  .that('an instance')            
    .will('has all actions', async () => {
      fileAdapter = await fileAdapter.configure();
      check.hasActions(fileAdapter); 
    })
    .run();

