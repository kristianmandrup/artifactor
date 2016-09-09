const adapters = require('./adapters')

// TODO: wrap using class or higher order function!
// Avoid duplication!!!
module.exports = async function (ctx, next) {
  console.log('create route');
  switch (ctx.accepts('json', 'html')) {
    case 'json':
      break;
    case 'html': 
      break;
    default: ctx.throw(406, 'json or html only');
  }

  const params = ctx.params;

  const entity = params.entity || 'components';
  const id = params.id || 0;
  const data = params.data;
  console.log('params data', data);

  const artifactor = adapters.io.adapt(entity, id);

  ctx.type = 'json';
  try {
    // let result = await artifactor.create();

    let result = artifactor.create();
    ctx.body = {
      created: true,
      result: result
    };
    ctx.status = 200; // OK
  } catch (err) {
    console.error('ERROR', err);
    ctx.body = {error: err};
    ctx.status = 400; // OK
  }
}