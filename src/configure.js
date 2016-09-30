const router = require('koa-router')();
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const artefacts = require('./routes/artefacts');

const views = require('koa-views');

module.exports = function(app, options) {
  const artefactRouters = artefacts(options);

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

  for (let router of artefactRouters) {
    app.use(router.routes(), router.allowedMethods());
  }

  app.on('error', function(err, ctx){
    console.log(err)
    logger.error('server error', err, ctx);
  });

  return app;
} 


