const adapters = require('./adapters')

// TODO: wrap using class or higher order function!
// Avoid duplication!!!
module.exports = async function (ctx, next) {
  console.log('entering version route');
  
  switch (ctx.accepts('json', 'html')) {
    case 'json':
      break;
    case 'html': 
      break;
    default: ctx.throw(406, 'json or html only');
  }

  console.log('params', ctx.params);

  const entity = ctx.params.entity || 'components';
  const id = ctx.params.id || 'contacts';
  const version = ctx.query.version || '1.0';

  const artifactor = adapters.io.adapt(entity, id);

  ctx.type = 'json';
  const jsonBody = await artifactor.version(version);
  ctx.body = jsonBody;
}