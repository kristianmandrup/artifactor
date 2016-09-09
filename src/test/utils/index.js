const chai = require('chai');
const expect = chai.expect;
chai.should();

module.exports = {
  expect: expect,
  agent: require('./agent'),
  koaApp: require('./koa-app'),
  callApi: require('./call-api')
}