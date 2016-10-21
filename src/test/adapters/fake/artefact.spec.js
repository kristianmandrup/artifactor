// TODO: Generate a fake, valid component
// Check that it matches schema

require('babel-core/register');
require('babel-polyfill');

const faker = require('../../../adapters/fake/faker')

console.log('fake generator factory', faker.generatorFor);

const check = require('./expect/artefact');
const test = require('mocha-test-dsl');

const generate = faker.generatorFor('component');

test('fake: components')
  .that('the Fake generator')            
    .will('generate a valid component', async () => {
      let component = await generate();   
      check.isValid(component);       
    })
    .run();
