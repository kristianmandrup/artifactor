const _ = require('../utils');
const check = require('./expect/create');
const test = require('mocha-test-dsl');
const components = require('./components');

test('Adapter: mongo')
  .that('Component.create')
    .will('creates a component', async () => {
      let result = await components.create({
        name: 'mindbender',
        type: 'component',
        version: '1.0',
        date: '7/7/2016'
      })

      check.created(result);
    })
    .run()
