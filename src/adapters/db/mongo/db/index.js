// getting-started.js
const mongoose = require('mongoose');
const dbName = 'artifactor';

mongoose.Promise = global.Promise || require('bluebird');

mongoose.connect('mongodb://localhost/' + dbName);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongo DB connection is open :)');
});

module.exports = db;