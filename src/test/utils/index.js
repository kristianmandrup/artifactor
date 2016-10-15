require("babel-core/register");
require("babel-polyfill");

const chai = require('chai');
const expect = chai.expect;
chai.should();

// require('./populate');

module.exports = {
  expect: expect,
  server: require('./server'),
  agent: require('./agent'),
  koaApp: require('./koa-app'),
  callApi: require('./call-api')
}