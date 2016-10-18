const _ = require('../utils');
const check = require('./expect/create');
const test = require('mocha-test-dsl');
const components = require('./components');

test('Adapter: mongo')
  .that('Component.findOneAndUpdate')
    .will('updates a component', async () => {
      let result = await components.update({name: 'mindbender'}, {
        name: 'new-mindbender',
        type: 'component',
        version: '1.1',
        date: '8/7/2016'
      })

      check.updated(result);
    })
    .run()
