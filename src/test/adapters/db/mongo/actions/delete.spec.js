const _ = require('../utils');
const check = require('./expect/delete');
const test = require('mocha-test-dsl');
const model = require('./model');

 test('Adapter: mongo')
  .that('Component.delete')
    .will('creates a component', async () => {
      let result = await model.delete({
        name: 'mindbender'
      })

      check.deleted(result);
    })
    .run()

