import fs from 'fs-promise';
import promisify from 'promisify-node'
import dir from 'node-dir';

const readFiles = promisify(dir.readFiles);
const files = promisify(dir.files);

import BaseIo from './base'; 

// TODO: Use readJson/writeJson directly from json-io
// https://www.npmjs.com/package/fs-extra#readjsonfile-options-callback
class FileIo extends BaseIo {
  constructor(entity, {params}) {
    super(entity, {params});
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
    return await this.readFiles();
  }
}

module.exports = function(entity, {params}) {
  return new FileIo(entity, {params});
}
