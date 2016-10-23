const { display, check, test, action } = require('./env');
 

 test('Adapter: mongo')
  .that('Component.delete')
    .will('creates a component', async () => {
      let result = await model.delete({
        name: 'mindbender'
      })

      check.deleted(result);
    })
    .run()

