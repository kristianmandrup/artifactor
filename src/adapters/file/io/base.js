const entities = require('../../../artefact').entities; 
const Paths = require('./utils/paths');

// TODO: Use readJson/writeJson directly from json-io
// https://www.npmjs.com/package/fs-extra#readjsonfile-options-callback
module.exports = class BaseIo {
  constructor(entity, id) {
    this.entity = entity || 'components';
    this.id = id;
    this.entities = entities;
    this.paths = new Paths(entity, id);
  }
}