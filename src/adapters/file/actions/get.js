const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(params) {
    super(params);
  }

  async execute() {
    console.log('version', this.version)
    let filePath = this.paths.versionPath(this.version);
    console.log('version path', filePath);
    return await fs.readJson(filePath);    
  }
}

