const { generatorFor } = require('../../../../adapters/fake/faker')

const io = require('../../models/io');

module.exports = {
  // populate Mongo DB using faker generator
  populate: function(modelName, maxCount = 1) {

    const generate = generatorFor(modelName);    
    const adapter = require('../');
    const ioAdapter = io(adapter);

    while (count++ < maxCount) {
      ioAdapter.create(generate());  
    }
    
    return true;
  }
}