const adapters = require('./adapters')

// TODO: wrap using class or higher order function!
// Avoid duplication!!!

module.exports = async function (ctx, next) {
  switch (ctx.accepts('json', 'html')) {
    case 'json':
      break;
    case 'html': 
      break;
    default: ctx.throw(406, 'json or html only');
  }

  const entity = ctx.params.entity || 'components';
  const artifactor = adapters.io.adapt(entity);

  ctx.type = 'json';
  const jsonBody = await artifactor.list();
  ctx.body = jsonBody;
}