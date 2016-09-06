'use strict';

var Promise = undefined.Promise || require('promise');
var promised = require('superagent-promise');
var superagent = require('superagent');
module.exports = promised(superagent, Promise);