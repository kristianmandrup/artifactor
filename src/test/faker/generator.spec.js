// TODO: Generate a fake, valid component
// Check that it matches schema

const { display, check, test, generatorFor } = require('./env');

const generate = generatorFor('component');
const createValidator = require('../../validator').request;

test('Faker')
  .that('generator')            
    .will('generate a valid component', async () => {
      let artefact = await generate();

      let validator = createValidator({
        method: 'create',
        validator: {
          throwError: true
        }
      })

      display(artefact);   

      check.validation(validator).for(artefact)
        .isValid();       
    })
    .run();
