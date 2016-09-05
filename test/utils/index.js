const chai = require('chai'),
const expect = chai.expect;
chai.should();

module.exports = {
  expect = expect,
  agent: require('./agent'),
  doAsync: require('./do-async'),
  koaApp: require('./koa-app'),
  callApi: require('./call-api')
}