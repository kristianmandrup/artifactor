const router = require('koa-router')();
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const viewRoutes = require('./routes/views');

const api = require('./routes/api');

const views = require('koa-views');

module.exports = function(app, options) {
  const artefactRouterFactory = api.artefacts;

  const artefactRouters = artefactRouterFactory(options);

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

  // TODO: strong-params
  // Rails-style implementation of strong parameters for Koa. 
  // The middleware adds the this.params object to the Koa context which returns an object, 
  // built from query string and request body data. 
  // The returned object has some useful methods allows for data requiring and filtering.


  // See: https://www.npmjs.com/package/koa-strong-params
  var qs = require('koa-qs')
  qs(app); // required for nested query string objects 
  const params = require('koa-strong-params');
  app.use(params());

  // TODO: GraphQL
  // const graphqlRouter = api.graphql;
  // app.use(graphqlRouter.routes()).use(graphqlRouter.allowedMethods());

  router.use('/', viewRoutes.routes(), viewRoutes.allowedMethods());

  for (let router of artefactRouters) {
    app.use(router.routes(), router.allowedMethods());
  }

  app.on('error', function(err, ctx){
    console.log(err)
    logger.error('server error', err, ctx);
  });

  return app;
} 


