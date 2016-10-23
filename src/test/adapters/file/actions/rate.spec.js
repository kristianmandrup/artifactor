const check = require('./check');
const test = require('mocha-test-dsl');

const { actions } = require('./');
const action = actions.create.rate('component', {
  id: 'contacts',
  version: 'latest'
});

// TODO: use new test DSL

test('Adapter: File')
  .that('action: rate')
  .that('on components/contacts') // on            
    .will('add a rating to that version', async () => {
      let result = await action.execute();
      check.isVersion(result, '1.2');
    })
    .will('change the average rating for that version', async () => {
      let result = await action.execute();
      check.isVersion(result, '1.2');
    })
    .run();
