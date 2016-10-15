const config = require('./config');

// use adapter config to determine which adapters to load
//   file: true => file: require('./file') 
const adapterConfig = Object.keys(config).reduce( (obj, key) => {
  if (config[key])
    obj[key] = require('./' + key) 
  return obj; 
}, {})

export default adapterConfig
