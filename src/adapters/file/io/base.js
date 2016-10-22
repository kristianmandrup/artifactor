import fs from 'fs-promise';
const entities = require('../../artefact').entities; 
const Paths = require('./utils/paths');

// TODO: Use readJson/writeJson directly from json-io
// https://www.npmjs.com/package/fs-extra#readjsonfile-options-callback
module.exports = class BaseIo {
  constructor(entity, {params}) {
    this.entity = entity || 'components';
    this.params = params;
    this.data = params.data;
    this.id = params.id;
    this.version = params.version;

    this.io = file.create(entity, id);

    this.fs = fs;
    this.saveJson = fs.outputJson;
    this.readJson = fs.readJson;

    this.entities = entities;
    this.paths = new Paths(entity, id);
  }
}