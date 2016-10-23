const { display, check, test, action } = require('./env');

let type = 'component';
let name = 'contacts';
let version = '1.2'; 

let params = {
  type,
  name,
  version
}

 test('Adapter: mongo')
  .that('Component.find')
    .will('finds a component', async () => {
      let result = await action(params).get.execute();

      check(result)
        .isVersion(version)
        .isType(type)
    })
    .run()

