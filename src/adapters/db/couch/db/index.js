const cradle = require('cradle');

class DbConnection {
  constructor(config = {}) {
    this.config = config;
    this.connection = new(cradle.Connection)();  
    this.db = connection.database('artefacts'); 
  }

  async configure() {
    await this.connect();    
    await this.db.maxRevisions(this.config.maxRevisions);
  }
  
  async connect() {
    try {    
      return await this.db.exists();     
    } catch (err) {
      return await this.db.create();
    }
  }

}


module.exports = {
  db,
  connect
}