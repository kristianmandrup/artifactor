const { displayLog } = require('../utils');

const CheckPopulated = require('./check');
const test = require('mocha-test-dsl');

const model = require('../')

const checkModel = new CheckPopulated(model);
