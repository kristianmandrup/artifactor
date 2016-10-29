const BaseAction = require('./base');

module.exports = class Latest extends BaseAction {
  constructor(params) {
    super(params);
  }

  async execute() {
    let latestVersion = await this.findLatestVersion();
    return await this.get(latestVersion)
  }

  // TODO: use cache
  async findLatest() {
    let versionFiles = await this.io.files();
    latestFile = versionFiles.reverse()[0]; // sort descending
    let content = await fs.readJson(latestFile);
    if (!content)
      return false;
    return content.version; 
  }
}
