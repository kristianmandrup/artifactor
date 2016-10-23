const check = require('./check');
const test = require('mocha-test-dsl');

const { actions } = require('./');
const action = actions.create.get('component', {
  id: 'contacts',
  version: 'latest'
});

// TODO: use new test DSL

test('Adapter: File')
  .that('action: list components/contacts')            
    .will('gets all versions', async () => {
      let result = await action.execute();
      check.isVersion(result, '1.2');
    })
    .run();
