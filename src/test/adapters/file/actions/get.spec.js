const { display } = require('./utils');
const check = require('./check');
const test = require('mocha-test-dsl');

const { actions } = require('./');
const action = actions.create.get('component', {
  id: 'contacts',
  version: '1.2'
});

// TODO: use new test DSL

test('Adapter: File')
  .that('action: get version=1.2')            
    .will('get that version', async () => {
      let result = await action.execute();
      check.isVersion(result, '1.2');
    })
    .run();
