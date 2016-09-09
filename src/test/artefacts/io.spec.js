const _ = require('../utils');
// to use expect:
// _.expect()

const io = require('../../artefacts/io');

describe('Io', () => {
  describe('create', () => {
    const components = io.create('components')            
    it('should return entity folder', () => {   
      _.expect(components.entityDir).to.match(/artefacts\/components$/);                
    });
  });
});
