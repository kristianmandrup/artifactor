const { display, check, test, action } = require('./env');

test('Adapter: File')
  .that('action: delete')            
    .will('deletes the version file', async () => {
      let type = 'contacts';
      let version = '1.2'; 

      let params = {
        type,
        version
      }

      let result = await action(params).delete.execute();
      check(result)
        .wasDeleted();
    })
    .run();
