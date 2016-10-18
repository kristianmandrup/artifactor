const RequestValidator = require('./');

const validator = new RequestValidator({
  method: 'remove',
  entity: 'component'
})

const components = require('./components')
const check = require('./check');
const test = require('mocha-test-dsl');

test('validate: components')
  .that('remove invalid component')            
    .will('return invalid', async () => {
      let component = components.remove.invalid({
        name: 'm'
      });

      let result = validator.validate(component);   
      check.invalid(result);       
    })
    .run();
