const { actions, check, test } = require('./env')

const createValidator = require('./');

const validator = createValidator({
  method: 'create',
  entity: 'component'
})

let testArtefact = test('validate: create artefact')

testArtefact
  .that('create invalid component')            
  .will('is invalid', () => {
    let create = actions.create.invalid({
      name: 'm'
    });

    let result = validator.validate(create);   

    check(result)
      .isValid(false)       
  })
  .run();

testArtefact
  .that('create valid artefact')            
  .will('is valid', () => {
    let create = actions.create.valid;

    let result = validator.validate(create);   

    check(result)
      .isValid()       
  })
  .run();
