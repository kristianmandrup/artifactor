const adapter = require('./adapter')

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
  const io = adapters.io.adapt(entity);

  if (!io.validate()) {
    ctx.throw(406, `invalid artefact type ${entity}`);
  }

  ctx.type = 'json';
  const jsonBody = io.list.join(',');
  ctx.body = `[\n${jsonBody}\n]\n`;
}