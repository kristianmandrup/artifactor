const _ = require('../utils');
const requests = require('../requests');
requests.rate = requests.components.contacts.rate;
const route = '/components/contacts';
const check = require('./expect/rate');
const test = require('mocha-test-dsl');

let testCall = async () => { 
  return await _.callApi(route + '/rate', 'POST', requests.rate); 
}

test('route: components')
  .that('POST component rating')            
    .will('add a rating to the component', async () => {   
        check.ratingAdded(testCall());       
    })
    .will('NOT add a second rating to the component for the same user', async () => {
      check.duplicateUserRatingNotAdded(testCall())
    })
    .run();