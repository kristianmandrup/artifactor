// TODO: Generate a fake, valid component
// Check that it matches schema

const { display, check, test, generate } = require('./env');

const createValidator = require('../../validator')

test('Faker')
  .that('generator')            
    .will('generate a valid component', async () => {
      let artefact = await generate();

      let validator = createValidator({
        method: 'create'
      })

      display(artefact);   

      check(validator).for(artefact)
        .isValid();       
    })
    .run();
