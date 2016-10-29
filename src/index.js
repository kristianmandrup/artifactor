// Note: Never reference internally. Only to be referenced by external modules! 

module.exports = {
  adapters: require('./adapters'),
  models: require('./models'),
  faker: require('./faker'),
  config: require('./config'),
  routes: require('./routes'),
  validator: require('./validator')
}
