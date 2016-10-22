// Define CouchDB models
// should contain methods that use Mango API similar to Mongo

module.exports = class Model {
  // uses promisified db (see PromisedLand for cradle)
  constructor(db) {
    this.db = db;
  }

  async get() {
    return await this.db.get();
  } 

  // pseudo code :P
  async updateOrCreate(data) {
    return await this.db.create(data);
  } 
}