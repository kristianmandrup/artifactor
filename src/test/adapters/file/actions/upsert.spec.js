const { display, check, test, action, ratingFor } = require('./env');

let type = 'components';
let name = 'contacts';
let version = 'latest'; 

let params = {
  type,
  name,
  version
}

test('Adapter: File')
  .that('action: upsert components/my-contacts')            
    .will('creates that component version', async () => {
      let result = await action(params).upsert.execute();

      check(result)
        .wasCreated(); // check new file was created
    })
    .run();

test('Adapter: File')
  .that('action: upsert components/contacts')            
    .will('updates that component version', async () => {
      let result = await action(params).upsert.execute();

      check(result)
        .wasUpdated(); // check timestamp
    })
    .run();
