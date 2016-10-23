// TODO: Generate a fake, valid component
// Check that it matches schema
require('babel-core/register');
require('babel-polyfill');

const check = require('./check/artefact');
const test = require('mocha-test-dsl');

const { generatorFor, data } = require('../../../../adapters/fake/faker')

const generate = generatorFor('component');

function display(obj) {
  return JSON.stringify(obj, null, 2)
}

function displayLog(obj) {
  console.log(display(obj));
}

test('Faker')
  .that('generator')            
    .will('generate a valid component', async () => {
      let component = await generate();

      displayLog(component);   

      check.isValid(component);       
    })
    .run();
