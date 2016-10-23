const RequestValidator = require('./');

const validator = new RequestValidator({
  method: 'remove',
  entity: 'component'
})

const components = require('./components')
const check = require('./check');
const test = require('mocha-test-dsl');
let component = components.remove.invalid({
  name: 'm'
});

test('validate: components')
  .that('remove invalid component')            
    .will('return invalid', async () => {
      let result = validator.validate(component);   
      check.invalid(result);       
    })
    .run();
