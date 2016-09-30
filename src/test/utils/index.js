const chai = require('chai');
const expect = chai.expect;
chai.should();

module.exports = {
  expect: expect,
  server: require('./server'),
  agent: require('./agent'),
  koaApp: require('./koa-app'),
  callApi: require('./call-api')
}