const { display } = require('./utils');
const check = require('./expect/get');
const test = require('mocha-test-dsl');
const model = require('./model');

 test('Adapter: mongo')
  .that('Component.findAll')
    .will('finds all components', async () => {
      let result = await model.findAll()

      check.retrieved(result);
    })
    .run()

