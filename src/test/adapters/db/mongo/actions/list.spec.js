const { display } = require('./utils');
const check = require('./expect/get');
const test = require('mocha-test-dsl');
const actions = require('./');
const action = actions.create.list(params);

 test('Adapter: mongo')
  .that('Component.findAll')
    .will('finds all components', async () => {
      let result = await action.execute()

      check.retrieved(result);
    })
    .run()

