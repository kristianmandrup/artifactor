const { mongo } = require('../../../../../adapters/db')
const models = mongo.models;

const _ = require('../utils');
const check = require('./expect/create');
const test = require('mocha-test-dsl');

let createComponent = async (obj) => {
  try {
    return models.Component.create(obj);
  } catch (err) {
    console.error(err);
  }  
}

test('Adapter: mongo')
  .that('Component.create')
    .will('creates a component', async () => {
      let result = await createComponent({
        name: 'mindbender',
        type: 'component',
        version: '1.0',
        date: '7/7/2016'
      })

      check.created(result);
    })
    .run()

