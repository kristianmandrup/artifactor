"use strict";

var ComponentDep = new Schema({
  name: String,
  version: String
});

var Dependencies = new Schema({
  components: [ComponentDep],
  libs: [String]
});

modules.export = new Schema({
  bundles: [String],
  dependencies: Dependencies
});