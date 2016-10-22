const cradle = require('cradle');
  
const db = new(cradle.Connection)().database('artefacts');

module.exports = db;