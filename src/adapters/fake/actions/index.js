// TODO: get actions from a global list
const actions = ['delete', 'get', 'latest', 'list', 'rate', 'upsert'];

const clazzes = actions.reduce((action, obj) => {
  obj[action] = require('./' + action);
  return obj;
}, {});

const factories = actions.reduce((action, funs) => {
  funs[action] = (params) => {
    return new require('./' + action)(params); 
  }
  return funs;
}, {})


module.exports = {
  create: factories,
  clazz: clazzes
}