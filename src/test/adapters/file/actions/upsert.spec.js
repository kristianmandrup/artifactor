const check = require('./check');
const test = require('mocha-test-dsl');

const file = require('../../adapters/file');
const actions = file.actions;

const params = {
  id: 'contacts',
  version: 'latest'
};

// TODO: all actions should be called with params object only!
const action = actions.create.get('component', params);

// TODO: use new test DSL

test('Adapter: File')
  .that('action: upsert components/my-contacts')            
    .will('creates that component version', async () => {
      check.doesNotExist('components', params);
      let result = await action.execute();
      check.wasCreated(result, params); // check new file was created
    })
    .run();

test('Adapter: File')
  .that('action: upsert components/contacts')            
    .will('updates that component version', async () => {
      check.doesExist('components', params);
      let result = await action.execute();
      check.wasUpdated(result); // check timestamp
    })
    .run();
