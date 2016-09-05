const component = require('./component-schema')

// Note: an app is a kind of component
// extend component schema with App specific schema (if needed) 
const schemaObj = Object.assign(component.schemaObj, {

});

module.exports = {
  schemaObj: schemaObj,
  schema: new Schema(schemaObj)
}