const { displayLog } = require('../utils');

const CheckPopulated = require('./check');
const test = require('mocha-test-dsl');

const checkModel = new CheckPopulated(model);
