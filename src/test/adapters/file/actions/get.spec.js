const check = require('./expect/get');
const test = require('mocha-test-dsl');

const file = require('../../adapters/file');
const actions = file.actions;
const action = actions.create.get('component', {
  id: 'contacts',
  version: '1.2'
});

// TODO: use new test DSL

test('Adapter: File')
  .that('action: get')            
    .will('gets the version file', async () => {
      let result = await action.execute();
      check.isVersion(result, '1.2');
    })
    .run();
