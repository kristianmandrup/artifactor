const ComponentDep = new Schema({
  name: String,
  version: String
});  

const Dependencies = new Schema({
  components: [ComponentDep],
  libs: [String]
});  

modules.export = new Schema({
  bundles: [String], 
  dependencies: Dependencies
}); 
