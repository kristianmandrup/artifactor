const { display, check, test, action } = require('./env');

test('Adapter: File')
  .that('action: get latest')            
    .will('gets that version', async () => {
      let type = 'components';
      let name = 'contacts';
      let version = 'latest'; 

      let params = {
        type,
        name,
        version
      }

      let result = await action(params).latest.execute();

      check(result)
        .matches({
          version,
          name,
          type
        })
    })
    .run();
