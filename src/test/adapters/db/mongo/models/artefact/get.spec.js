const { display } = require('./utils');
const check = require('./expect/get');
const test = require('mocha-test-dsl');
const model = require('./model');

let predicate = {
  name: 'mindbender'
}

 test('Adapter: mongo')
  .that('Component.find')
    .will('finds a component', async () => {
      let result = await model.find(predicate)

      check(result)
        .wasRetrieved();
    })
    .run()

