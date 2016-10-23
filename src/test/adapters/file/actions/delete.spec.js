const { display } = require('./utils');
const check = require('./check');
const test = require('mocha-test-dsl');
const { actions } = require('./');
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
