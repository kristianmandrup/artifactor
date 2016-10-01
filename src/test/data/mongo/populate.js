// populate Mongo DB

const adapter = require('../../../adapters').db;

// var fluffy = new Kitten({ name: 'fluffy' });

const components = adapter.adapt('components');


// TODO: alternatively generate fake data using Fake adapter (see artefacts/faker folder)
let contacts = require('../../../../responses/components/contacts/item');

components.create('contact', contacts).then(() => {
  console.log('Mongo DB - created', contacts)
})

