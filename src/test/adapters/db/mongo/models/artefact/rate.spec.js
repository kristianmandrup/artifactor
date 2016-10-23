const { display } = require('./utils');
const check = require('./expect/create');
const test = require('mocha-test-dsl');
const model = require('./model');

test('Adapter: mongo')
  .that('rate')
    .will('rates a component', async () => {
      let predicate = {
        name: 'mindbender'
      };

      let rating = {
        name: 'new-mindbender',
        type: 'component',
        version: '1.1',
        date: '8/7/2016'
      }

      let result = await model.find(predicate).rate(rating);

      check.updated(result);
    })
    .run()
