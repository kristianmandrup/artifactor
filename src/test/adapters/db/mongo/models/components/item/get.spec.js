const _ = require('../utils');
const check = require('./expect/get');
const test = require('mocha-test-dsl');
const components = require('./components');

 test('Adapter: mongo')
  .that('Component.find')
    .will('finds a component', async () => {
      let result = await components.find({
        name: 'mindbender'
      })

      check.retrieved(result);
    })
    .run()

