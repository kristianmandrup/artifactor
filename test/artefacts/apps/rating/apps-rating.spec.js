'use strict';

const _ = require('../../utils');
const data = require('../requests/rating');
const expectations = require('./expectations');

// to use expect:
// _.expect()

async function rating(data) {
  return _.callApi('/apps/contacts-app/rate', 'POST', data);
}

describe('apps', () => {
  describe('POST app rating', () => {            
    it('should add a rating to the app', _.doAsync(async () => {   
      let result = await rating(data);
      expectations.ratingAdded(result);       
    }));

    it('should NOT add a second rating to the app for the same user', _.doAsync(async () => {   
      let result = await rating(data);         
      expectations.duplicateUserRatingNotAdded(result);       
    }));
  });
});
