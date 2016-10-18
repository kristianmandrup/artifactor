const _ = require('../utils');
const requests = require('../requests');
requests.rate = requests.apps.contactsApps.rate;
const route = '/apps/contacts-app';
const check = require('./expect/rate');
const test = require('mocha-test-dsl');

test('route: apps')
  .that('POST app rating')            
    .will('add a rating to the app', async () => {   
        let result = await _.callApi(route + '/rate', 'POST', data);
        check.ratingAdded(await _.callApi(route, 'PUT', requests.rate));       
    })
    .will('NOT add a second rating to the app for the same user', async () => {
      let result = await _.callApi(route + '/rate', 'POST', requests.rate);
      check.duplicateUserRatingNotAdded(result)
    })
    .run();
