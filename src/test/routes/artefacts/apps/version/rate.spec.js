const _ = require('../utils');
const requests = require('../requests');
requests.rate = requests.apps.contactsApps.rate;
const route = '/apps/contacts-app';
const check = require('./expect/rate');
const test = require('mocha-test-dsl');

let testCall = async () => { 
  return await _.callApi(route + '/rate', 'POST', requests.rate); 
}

test('route: apps')
  .that('POST app rating')            
    .will('add a rating to the app', async () => {   
        check.ratingAdded(testCall());       
    })
    .will('NOT add a second rating to the app for the same user', async () => {
      check.duplicateUserRatingNotAdded(testCall())
    })
    .run();