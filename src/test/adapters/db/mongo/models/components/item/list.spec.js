const _ = require('../utils');
const check = require('./expect/get');
const test = require('mocha-test-dsl');
const components = require('./components');

 test('Adapter: mongo')
  .that('Component.findAll')
    .will('finds all components', async () => {
      let result = await components.findAll()

      check.retrieved(result);
    })
    .run()

