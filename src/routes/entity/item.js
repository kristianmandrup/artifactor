const Io = require('../artefacts/io')

module.exports = async function list(ctx, next) {
  switch (ctx.accepts('json', 'html')) {
    case 'json':
      break;
    case 'html': 
      break;
    default: ctx.throw(406, 'json or html only');
  }

  const entity = ctx.params.entity || 'components';
  const id = ctx.params.id || 0;

  const io = new Io(entity);

  if (!io.validate()) {
    ctx.throw(406, `invalid artefact type: ${entity}`);
  }      

  ctx.type = 'json';
  const jsonBody = io.jsonItem(id);
  ctx.body = `[\n${jsonBody}\n]\n`;
}