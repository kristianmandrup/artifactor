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
  const id = ctx.params.id || 0;

  const artifactor = adapters.io.adapt(entity);

  ctx.type = 'json';
  try {
    let result = await artifactor.create(id, ctx);
    ctx.body = `created item: ${id}`;
    ctx.status = 200; // OK
  } catch (err) {
    ctx.body = `error: ${err}`;
    ctx.status = 400; // OK
  }
}