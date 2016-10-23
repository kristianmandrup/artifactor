// TODO: Generate a fake, valid component
// Check that it matches schema

const { display } = require('./utils');
const check = require('./check');
const test = require('mocha-test-dsl');

const { generatorFor } = require('../../../../adapters/fake/faker')

const generate = generatorFor('component');

test('Faker')
  .that('generator')            
    .will('generate a valid component', async () => {
      let component = await generate();

      display(component);   

      check.isValid(component);       
    })
    .run();
