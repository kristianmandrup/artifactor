// TODO: Generate a fake, valid component
// Check that it matches schema

require('babel-core/register');
require('babel-polyfill');

const schema = require('../../../../../adapters/fake/faker/schemas/environment')

function display(obj) {
  return JSON.stringify(obj, null, 2)
}

console.log('environment schema', display(schema));

const jsf = require('json-schema-faker')

const test = require('mocha-test-dsl');

test('faker')
  .that('environment schema')            
    .will('generate a valid environment', async () => {
      let env = jsf(schema)
      console.log('env', display(env));   
      check.isValidEnv(component);       
    })
    .run();
