const { display, check, test, action } = require('./env');

test('Adapter: File')
  .that('action: get version=1.2')            
    .will('get that version', async () => {
      let type = 'contacts';
      let version = '1.2'; 

      let params = {
        type,
        version
      }

      let result = await action(params).get.execute();

      check(result)
        .isVersion(version)
        .isType(type)
    })
    .run();
