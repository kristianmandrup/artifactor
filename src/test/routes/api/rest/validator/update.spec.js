const RequestValidator = require('./');

const validator = new RequestValidator({
  method: 'update',
  entity: 'component'
})

const components = require('./components')
const check = require('./check');
const test = require('mocha-test-dsl');

test('validate: components')
  .that('update invalid component')            
    .will('return invalid', async () => {
      let component = components.invalid({
        name: 'm'
      });
      let result = validator.validate(component);   
      check.invalid(result);       
    })
    .run();
