const config = require('./config');

function createFactory(clazz) {
  return async (params) => {
    return await new clazz(params).configure();
  }
} 

function createEntry(key) {
  let clazz = require(`./${key}`)
  return {
    clazz: clazz,
    create: createFactory(clazz)
  }   
}

// use adapter config to determine which adapters to load
//   file: true => file: require('./file') 
const adapterConfig = Object.keys(config).reduce( (obj, key) => {
  if (config[key])    
    obj[key] = createEntry(key);
  return obj; 
}, {})

// creates and exports an object
// where for each adapter there is a clazz and a create function 
   
export default adapterConfig
