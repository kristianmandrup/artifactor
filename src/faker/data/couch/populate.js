const { generatorFor } = require('../../../../adapters/fake/faker')
const generate = generatorFor('component');

const DbSaver = require('../../artefact/io/db-saver');

module.exports = {
  // populate Couch DB using faker generator
  populate: function(maxCount) {
    const adapter = require('../../adapters/db/couch');

    while (count < maxCount) {
      let artefact = generate(count++);

      new DbSaver(artefact, adapter).save();  
    }
    
    return true;
  }
}