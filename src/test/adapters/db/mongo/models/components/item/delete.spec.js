const _ = require('../utils');
const check = require('./expect/delete');
const test = require('mocha-test-dsl');
const components = require('./components');

 test('Adapter: mongo')
  .that('Component.delete')
    .will('creates a component', async () => {
      let result = await components.delete({
        name: 'mindbender'
      })

      check.deleted(result);
    })
    .run()

