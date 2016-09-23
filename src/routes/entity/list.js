const adapters = require('./adapters')

// TODO: wrap using class or higher order function!
// Avoid duplication!!!

module.exports = async function (ctx, next) {
  // console.log('entering list route', ctx);
  switch (ctx.accepts('json', 'html')) {
    case 'json':
      break;
    case 'html': 
      break;
    default: ctx.throw(406, 'json or html only');
  }

  const artifactor = adapters.io.adapt('components');

  ctx.type = 'json';
  const jsonBody = await artifactor.list();
  ctx.body = jsonBody;
}