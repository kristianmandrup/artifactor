const { display } = require('./utils');
const check = require('./check');
const test = require('mocha-test-dsl');

const { actions } = require('./');
const action = actions.create.get('component', {
  id: 'contacts',
  version: 'latest'
});

// TODO: use new test DSL

test('Adapter: File')
  .that('action: get latest')            
    .will('gets that version', async () => {
      let result = await action.execute();
      check.isLatestVersion(result);
    })
    .run();
