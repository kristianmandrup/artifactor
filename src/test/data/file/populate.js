const { generatorFor } = require('../../../../adapters/fake/faker')
const generate = generatorFor('component');

const { createFileSaver } = require('../../artefact/io/db-saver');

module.exports = {
  // populate mock files using faker generator
  populate: function(maxCount) {
    // const adapter = require('../../adapters/file');

    while (count < maxCount) {
      let artefact = generate(count++);

      // TODO: alternatively use file adapter
      createFileSaver(artefact, adapter).save();  
    }
    
    return true;
  }
}