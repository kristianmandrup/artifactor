// TODO: Generate a fake, valid component
// Check that it matches schema
require('babel-core/register');
require('babel-polyfill');

const check = require('./expect/artefact');
const test = require('mocha-test-dsl');

const { generatorFor } = require('../../../../adapters/fake/faker')

const generate = generatorFor('component');

test('Faker')
  .that('generator')            
    .will('generate a valid component', async () => {
      let component = await generate();   
      check.isValid(component);       
    })
    .run();
