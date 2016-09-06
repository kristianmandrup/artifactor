const {Schema } = require('mongoose');

const ComponentDep = new Schema({
  name: String,
  version: String
});  

const Dependencies = new Schema({
  components: [ComponentDep],
  libs: [String]
});  

module.exports = new Schema({
  bundles: [String], 
  dependencies: Dependencies
}); 
