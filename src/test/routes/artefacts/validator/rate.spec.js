const RequestValidator = require('./');

const validator = new RequestValidator({
  method: 'rate',
  entity: 'component'
})

const components = require('./components')
const check = require('./check');
const test = require('mocha-test-dsl');

test('validate: rating')
  .that('create valid rating')            
    .will('return valid', async () => {
      let component = components.rate.valid;
      let result = validator.validate(component);   
      check.invalid(result);       
    })
    .run();

test('validate: rating')
  .that('create invalid rating')            
    .will('return invalid', async () => {
      let component = components.rate.invalid({
        name: 'm'
      });
      let result = validator.validate(component);   
      check.invalid(result);       
    })
    .run();
