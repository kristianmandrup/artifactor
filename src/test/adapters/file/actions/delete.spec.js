const { display, check, test, action } = require('./env');

let type = 'component';
let name = 'contacts';
let version = '1.2'; 

let params = {
  type,
  name,
  version
}

test('Adapter: File')
  .that('action: delete')            
    .will('deletes the version file', async () => {
      let result = await action(params).delete.execute();
      check(result)
        .wasDeleted();
    })
    .run();
