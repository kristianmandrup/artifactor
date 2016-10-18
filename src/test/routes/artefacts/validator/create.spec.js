const RequestValidator = require('./');

const validator = new RequestValidator({
  method: 'create',
  entity: 'component'
})

const components = require('./components')
const check = require('./check');
const test = require('mocha-test-dsl');

test('validate: components')
  .that('create invalid component')            
    .will('return invalid', async () => {
      let component = components.create.invalid({
        name: 'm'
      });
      let result = validator.validate(component);   
      check.invalid(result);       
    })
    .run();
