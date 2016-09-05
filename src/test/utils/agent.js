const Promise = this.Promise || require('promise');
const promised = require('superagent-promise');
const superagent = require('superagent');
module.exports = promised(superagent, Promise);
