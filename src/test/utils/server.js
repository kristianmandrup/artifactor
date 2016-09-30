const app = require('./koa-app');

const adapter = 'db';

const server = require('../../server');
const startedApp = app({
  adapter: adapter
});

console.log('start app using', adapter, 'adapter');
server.serve(startedApp);
