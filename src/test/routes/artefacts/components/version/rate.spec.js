const _ = require('../utils');
const requests = require('../requests');
requests.rate = requests.components.contacts.rate;
const route = '/components/contacts';
const check = require('./expect/rate');
const test = require('mocha-test-dsl');

test('route: components')
  .that('POST component rating')            
    .will('add a rating to the component', async () => {   
        let result = await _.callApi(route + '/rate', 'POST', data);
        check.ratingAdded(await _.callApi(route, 'PUT', requests.rate));       
    })
    .will('NOT add a second rating to the component for the same user', async () => {
      let result = await _.callApi(route + '/rate', 'POST', requests.rate);
      check.duplicateUserRatingNotAdded(result)
    })
    .run();
