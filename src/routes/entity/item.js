const adapters = require('./adapters')
const version = require('./version')

// TODO: wrap using class or higher order function!
// Avoid duplication!!!
module.exports = async function (ctx, next) {
  // console.log('entering item route', ctx);
  
  switch (ctx.accepts('json', 'html')) {
    case 'json':
      break;
    case 'html': 
      break;
    default: ctx.throw(406, 'json or html only');
  }

  console.error('querystring', ctx.querystring);
  console.error('query', ctx.query);

  if (ctx.query.version) {
    console.log('get version', ctx.query.version)
    return await version(ctx, next);
  }

  console.log('params', ctx.params);

  const entity = 'components';
  const id = ctx.params.id || 'contacts';

  const artifactor = adapters.io.adapt(entity, id);

  ctx.type = 'json';
  const jsonBody = await artifactor.item();
  ctx.body = jsonBody;
}