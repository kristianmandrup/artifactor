const BaseAction = require('./base');

module.exports = class Action extends BaseAction {
  constructor(entity, {params}) {
    super(entity, {params});
  }

  // async
  async execute() {
    return {
      rated: await this.rated()
    };
  }  

  async rated() {
    let filePath = this.paths.versionPath(this.version);
    console.log('rate path', filePath);
    try {
      let found = await fs.readJson(filePath);

      // add rating to ratings of version item
      console.log('item before rating', found)
      found.ratings.push(this.data.rating);

      console.log('item after rating', found)
      await fs.outputJson(filePath, found);

      return true;
    } catch (err) {
      return false;
    }     
  }  
}
