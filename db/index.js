// getting-started.js
const mongoose = require('mongoose');
const dbName = 'artifactor';

mongoose.connect('mongodb://localhost/' + dbName);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongo DB connection is open :)');
});

