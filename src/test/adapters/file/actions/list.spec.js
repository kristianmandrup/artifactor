const { display, check, test, action } = require('./env');

let type = 'components';
let name = 'contacts';
let version = 'latest'; 

test('Adapter: File')
  .that('action: list components/contacts')            
    .will('gets all versions', async () => {
      let params = {
        type,
        name,
        version
      }

      let result = await action(params).list.execute();

      check(result)
        .isVersion('1.2');
    })
    .run();
