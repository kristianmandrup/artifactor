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
  .that('action: get latest')            
    .will('gets that version', async () => {
      let result = await action(params).latest.execute();

      check(result)
        .matches({
          version,
          name,
          type
        })
    })
    .run();
