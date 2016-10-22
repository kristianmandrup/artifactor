const check = require('./expect/get');
const test = require('mocha-test-dsl');

const file = require('../../adapters/file');
const actions = file.actions;
const action = actions.create.delete('component', {
  id: 'contacts'
});

// TODO: use new test DSL

test('Adapter: File')
  .that('action: delete')            
    .will('deletes the version file', async () => {
      let result = await action.execute();
      check.wasDeleted(result);
    })
    .run();
