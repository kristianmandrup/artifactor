const { display, check, test, action } = require('./env');

let type = 'component';
let name = 'contacts';
let version = 'latest'; 

let params = {
  type,
  name,
  version
}

test('Adapter: File')
  .that('action: list components/contacts')            
    .will('gets all versions', async () => {
      let result = await action(params).list.execute();

      check(result)
        .isVersion('1.2');
    })
    .run();
