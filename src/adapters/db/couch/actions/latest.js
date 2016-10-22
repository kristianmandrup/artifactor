const BaseAction = require('../base');

module.exports = class Latest extends BaseAction {
  constructor(entity, id) {
    super(entity, id);
  }

  async execute() {
    let latestVersion = await this.findLatest();
    return await this.get(latestVersion)
  }

  // TODO: use cache
  async findLatest() {
    // sort by version then get first one
    let sortedVersions = await this.model.get().sort({version: true}).exec();
    return sortedVersions ? sortedVersions[0] : {}; 
  }
}
