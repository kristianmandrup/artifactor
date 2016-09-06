'use strict';

// getting-started.js
var mongoose = require('mongoose');
var dbName = 'artifactor';

mongoose.connect('mongodb://localhost/' + dbName);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('Mongo DB connection is open :)');
});