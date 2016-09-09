const adapters = require('./adapters')

// TODO: wrap using class or higher order function!
// Avoid duplication!!!
module.exports = async function (ctx, next) {
  console.log('entering item route');
  
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

  const artifactor = adapters.io.adapt(entity);

  // if (!artifactor.validate()) {
  //   ctx.throw(406, `invalid artefact type: ${entity}`);
  // }

  ctx.type = 'json';
  const jsonBody = await artifactor.item(id);
  ctx.body = jsonBody; // `[\n${jsonBody}\n]\n`;
}