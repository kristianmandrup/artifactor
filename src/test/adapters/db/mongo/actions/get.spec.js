const { display } = require('./utils');
const check = require('./expect/get');
const test = require('mocha-test-dsl');
const actions = require('./');

 test('Adapter: mongo')
  .that('Component.find')
    .will('finds a component', async () => {
      let result = await model.find({
        name: 'mindbender'
      })

      check.retrieved(result);
    })
    .run()

