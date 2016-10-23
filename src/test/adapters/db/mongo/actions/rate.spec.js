const { display, check, test, action, ratingFor } = require('./env');

let type = 'component';
let name = 'contacts';
let version = 'latest';

let ratings = {
  kris: ratingFor({user: 'kris', vote: 2})
} 

let params = {
  type,
  name,
  version,
  rating: ratings.kris
}

test('Adapter: File')
  .that('action: rate')
  .that('on components/contacts') // on            
    .will('add a rating to that version', async () => {
      let result = await action(params).rate.execute();

      check(result)
        .isVersion('1.2');
    })
    .will('change the average rating for that version', async () => {
      let result = await action(params).rate.execute();

      check(result)
        .isVersion(result, '1.2');
    })
    .run();
