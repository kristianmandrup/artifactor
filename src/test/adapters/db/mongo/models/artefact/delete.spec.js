const { display, check, test, model } = require('./env');

let predicate = {
  name: 'mindbender'
}

test('Adapter: mongo')
  .that('Component.delete')
    .will('creates a component', async () => {
      let result = await model.delete(predicate)

      check(result)
        .wasDeleted()
    })
    .run()

