import fs from 'fs-promise';
import promisify from 'promisify-node'
import dir from 'node-dir';

const readFiles = promisify(dir.readFiles);
const files = promisify(dir.files);

import BaseIo from './base'; 

// TODO: Use readJson/writeJson directly from json-io
// https://www.npmjs.com/package/fs-extra#readjsonfile-options-callback
class FileIo extends BaseIo {
  constructor(entity, id) {
    super(entity, id);
  }

  validate() {
    return this.entities.validate();
  }

  async readFiles() {
    return await readFiles(this.paths.folder);
  }

  async files() {
    return await files(this.paths.folder);
  }

  async delete() {
    let filePath = this.paths.itemPath;
    console.log('delete path', filePath);
    try {
      await fs.remove(filePath);
      return true;
    } catch (err) {
      return false;
    }     
  }

  async list() {
    return await fs.readFile(this.paths.listPath, 'utf8');
  }
}

module.exports = {
  clazz: FileIo,
  create: function(entity, id) {
    return new FileIo(entity, id);
  }
}