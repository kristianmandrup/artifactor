// 'babel-polyfill' is needed for async/await.
require('babel-polyfill');

const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const users = require('./routes/users');
const artefactRouters = require('./routes/artefacts');
// const components = require('./routes/components');

const views = require('koa-views');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(logger()));
app.use(require('koa-static')(__dirname + '/../public'));

app.use(views(__dirname + '/../views', {
  extension: 'jade'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});;

// const params = require('koa-strong-params');
// app.use(params());

router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());
// router.use('/components', components.routes(), components.allowedMethods());

// router.use('/artefacts', artefacts.routes(), users.allowedMethods());

for (let router of artefactRouters) {
  app.use(router.routes(), router.allowedMethods());
}

// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});

// Start the application.
// app.listen(5050, () => console.log('Listening on port 5050.'));

module.exports = app;